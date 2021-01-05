import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-sample98-default-rtdb.firebaseio.com/'
});

export default instance;