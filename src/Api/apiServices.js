import axios from 'axios';

const instance = axios.create({
    baseURL: "http://127.0.0.1:8000/api"
})

const userServices = {
    login: (data) => instance.post('/auth/login', data),
    user: (data) => instance.get('/user', data),
    register: (data) => instance.post('/auth/register', data),
    logout: (config) => instance.post('/auth/logout', null, { headers: { 'Authorization': `Bearer ${ config }` } })
}

export default userServices;