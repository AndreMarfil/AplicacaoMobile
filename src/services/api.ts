import axios from 'axios';

const api = axios.create({baseURL: 'https://api-appac2.herokuapp.com/'});

export default api;
