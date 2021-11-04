import React, { Component } from 'react'
import { Platform, ScrollView, Text, TouchableOpacity, View, PermissionsAndroid, Image, ImageBackground } from 'react-native'

import RtcEngine, { RtcLocalView, RtcRemoteView, VideoRenderMode } from 'react-native-agora'


import { styles } from '@components'
import { Background, BACKGROUND, CALLED, ENDCALL } from '@assets'




const requestCameraAndAudioPermission = async () => {
    try {
        const granted = await PermissionsAndroid.requestMultiple([
            PermissionsAndroid.PERMISSIONS.CAMERA,
            PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        ])
        if (
            granted['android.permission.RECORD_AUDIO'] === PermissionsAndroid.RESULTS.GRANTED
            && granted['android.permission.CAMERA'] === PermissionsAndroid.RESULTS.GRANTED
        ) {
            console.log('You can use the cameras & mic')
        } else {
            console.log('Permission denied')
        }
    } catch (err) {
        console.warn(err)
    }
}


interface Props {
}


interface State {
    appId: string,
    channelName: string,
    token: string,
    joinSucceed: boolean,
    peerIds: number[],
}


export class VideoCall_CodeLearn extends Component<Props, State> {
    _engine?: RtcEngine

    constructor(props) {
        super(props)
        this.state = {
            appId: '391db2ffcb924f48888d8f91ce39d7b2',
            channelName: 'NgocChau',
            token: '006391db2ffcb924f48888d8f91ce39d7b2IAAtx11ZjXGVkDYDbP+yW7faM4SQ8GIRNaoYHiGo1VJNM9F/+KMAAAAAIgDK8nmizVczYQQAAQBdFDJhAgBdFDJhAwBdFDJhBABdFDJh',
            joinSucceed: false,
            peerIds: [],
        }
        if (Platform.OS === 'android') {
            requestCameraAndAudioPermission().then(() => {
                console.log('requested!')
            })
        }
    }

    componentDidMount() {
        this.init()
    }

    init = async () => {
        const { appId } = this.state
        this._engine = await RtcEngine.create(appId)
        // Enable the video module.
        await this._engine.enableVideo()

        this._engine.addListener('UserJoined', (uid, elapsed) => {
            console.log('UserJoined', uid, elapsed)
            const { peerIds } = this.state
            if (peerIds.indexOf(uid) === -1) {
                this.setState({
                    peerIds: [...peerIds, uid]
                })
            }
        })


        this._engine.addListener('UserOffline', (uid, reason) => {
            console.log('UserOffline', uid, reason)
            const { peerIds } = this.state
            this.setState({
                // Remove peer ID from state array
                peerIds: peerIds.filter(id => id !== uid)
            })
        })


        this._engine.addListener('JoinChannelSuccess', (channel, uid, elapsed) => {
            console.log('JoinChannelSuccess', channel, uid, elapsed)
            this.setState({
                joinSucceed: true
            })
        })
    }

    startCall = async () => {
        await this._engine?.joinChannel(this.state.token, this.state.channelName, null, 0)
    }


    render() {
        return (
            <ImageBackground source={Background} style={styles.max}>

                <View style={styles.max}>
                    <View style={styles.max}>
                        {this._renderVideos()}
                        <View style={styles.buttonHolder}>
                            <TouchableOpacity
                                onPress={this.startCall}
                                style={styles.button}>
                                <Image source={CALLED} style={{ width: 50, height: 50 }} />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={this.endCall}
                                style={styles.button}>
                                <Image source={ENDCALL} style={{ width: 50, height: 50 }} />

                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </ImageBackground>

        )
    }



    _renderVideos = () => {
        const { joinSucceed } = this.state
        return joinSucceed ? (
            <View style={styles.fullView}>
                <RtcLocalView.SurfaceView
                    style={styles.max}
                    channelId={this.state.channelName}
                    renderMode={VideoRenderMode.Hidden} />
                {this._renderRemoteVideos()}
            </View>
        ) : null
    }

    _renderRemoteVideos = () => {
        const { peerIds } = this.state
        return (
            <ScrollView
                style={styles.remoteContainer}
                contentContainerStyle={{ paddingHorizontal: 2.5 }}
                horizontal={true}>
                {peerIds.map((value, index, array) => {
                    return (
                        <RtcRemoteView.SurfaceView
                            style={styles.remote}
                            uid={value}
                            channelId={this.state.channelName}
                            renderMode={VideoRenderMode.Hidden}
                            zOrderMediaOverlay={true} />
                    )
                })}
            </ScrollView>
        )
    }

    endCall = async () => {
        await this._engine?.leaveChannel()
        this.setState({ peerIds: [], joinSucceed: false })
    }

}
