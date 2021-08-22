import socketIOClient from 'socket.io-client';
import { socketURL } from '@api';


const ENDPOINT = socketURL;
export const socket = socketIOClient(ENDPOINT,{forceNew:true});

socket.on('connection', () => console.log('CONNECTTED'));