import axios from 'axios';

const api = axios.create({
    baseURL: 'https://instacloneca.herokuapp.com',
})

export default api;