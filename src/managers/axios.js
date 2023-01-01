import axios from 'axios';

let baseUrl = process.env.REACT_APP_HOST

const instance = axios.create({
    baseURL: baseUrl,
});

export default instance;