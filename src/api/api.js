	
// authAxios.js
import axios, * as others from 'axios';
// Or like this...
const Api = axios.create ({
    baseURL : 'http://192.168.0.119:8000/api/',
    headers: {'Accept': 'application/json'}
})

export default Api;