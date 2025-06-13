import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080', // ✅ NO trailing slash
  withCredentials: true // ✅ for CORS if you need cookies or auth
});

export default api;
