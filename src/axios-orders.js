import axios from 'axios';

const instance = axios.create({
    baseURL: 'your url'
});

export default instance;
