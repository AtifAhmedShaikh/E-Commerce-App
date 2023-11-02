import axios from "axios";
const api = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: { 'Content-Type': 'application/json' },
    withCredentials:false,
});
export default api;
