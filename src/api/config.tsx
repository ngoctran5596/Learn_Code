import axios from "axios";

export const config = axios.create({
    // baseURL:'https://duan-3.glitch.me/api/'
    baseURL:'https://192.168.1.15:3000/api/'
})