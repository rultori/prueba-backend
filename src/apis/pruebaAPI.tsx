import axios from 'axios';
export const pruebaAPI = axios.create({
    baseURL: 'http://api-backend.test/api/v1/',
});

export default pruebaAPI;