import axios from "axios";

 const config = axios.create({
    // baseURL:'https://learn-code-easy.herokuapp.com/api/'
    // baseURL:'http://172.20.10.6:3000/api/'
    baseURL:'http://172.19.201.160:3000/api/'
})
 
// export const socketURL = 'https://learn-code-easy.herokuapp.com';
export const socketURL = 'http://172.19.201.160:3000';
export const $axios = {config};