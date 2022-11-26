import axios from 'axios';

const BASE_URL = 'https://api.github.com/';

const Api = axios.create({
    baseURL: BASE_URL
});



export default Api;