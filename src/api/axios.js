import axios from 'axios';

const api = axios.create({
    baseURL: 'https://bk-db-eta.vercel.app/api'
});

export default api;