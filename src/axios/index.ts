import axios from 'axios';

// BaseURL never reassigned, so in that specific case, we use CONST
const baseURL = "http://localhost:8001/api/";

const Axios = axios.create({
    baseURL: baseURL
});

Axios.defaults.baseURL = baseURL;
Axios.defaults.headers.post['Content-Type'] = 'application/json';

export default Axios;