	
// authAxios.js
import axios, * as others from 'axios';
// Or like this...
const Api = axios.create ({
    baseURL : 'http://128.199.50.24:8082/api/',
    headers: {'Accept': 'application/json'}
})

export default Api;