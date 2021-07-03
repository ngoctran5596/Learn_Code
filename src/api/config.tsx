import axios from "axios";

 const config = axios.create({
    baseURL:'https://duan-3.glitch.me/api/'
})

export const $axios = {config};