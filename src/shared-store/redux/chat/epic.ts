import {chatActions, typesActionChat} from './action';
import socketIOClient from 'socket.io-client'
import { useSelector } from 'react-redux'

import {ofType} from 'redux-observable';
import {mergeMap} from 'rxjs/operators';
import {$axios} from '@api';

const ENDPOINT = 'http://192.168.1.18:3000'
const socket = socketIOClient(ENDPOINT);
socket.on('connection',()=>console.log('CONNECTTED'));



export const chatUserListEpic = ($action: any) => {
  return $action.pipe(
    ofType(typesActionChat.CHAT_USERLIST)
  );
};

