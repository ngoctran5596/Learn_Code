import { Colors } from '@assets'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Pressable } from 'react-native'
import { Modal, StyleSheet, Text, TextInput, View } from 'react-native'


export interface ModalLabelProps {
    modalVisible?: any,
    setModalVisible?: any,
    title?: any,
    textButton?: any,
    children?: any,

}
export const ModalProfile = (props: any) => {
    const { modalVisible, setShowModal, children,onPress } = props;
    // const [showModal, setShowModal] = React.useState(modalVisible);
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {}}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    {children}
                    <View style={{ flexDirection: 'row' }}>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={setShowModal}>
                            <Text style={styles.textStyle}>Cancel</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={ onPress}>
                            <Text style={styles.textStyle}>Xác nhận</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    )
}



const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,

    },
    modalView: {
        margin: 5,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 15,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: Colors.PURPLE,
        marginRight: 10
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
})
