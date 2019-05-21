import axios from 'axios';

const instance = axios.create({
    baseURL: '/absolute'
})

export {instance};