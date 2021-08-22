import {chatActions, typesActionChat} from './action';
import socketIOClient from 'socket.io-client'
import { useSelector } from 'react-redux'

import {ofType} from 'redux-observable';
import {mergeMap} from 'rxjs/operators';
import {$axios} from '@api';
import { pipe } from 'rxjs';

// const ENDPOINT = 'http://192.168.1.18:3000'
// const socket = socketIOClient(ENDPOINT);
// socket.on('connection',()=>console.log('CONNECTTED'));



// export const chatUserListEpic = ($action: any) => {
//   return $action.pipe(
//     ofType(typesActionChat.ALL_USER),
//     pipe((act: any) => {
//         socket.emit('getUsers')
//         socket.on('getAllUser', (user) =>{
//           const allUser = user.filter(({email}:any)=> email !== act.payload.userStore.email).map(({email,name,_id,image}:any)=>({
//               _id,
//               email,
//               name,
//               image,
//               time:'1:00',
//               msg:'last msg',
//           }));
//         return chatActions.allUser(allUser);
//       });
      
//     }),
//   );
// };

