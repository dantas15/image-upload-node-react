import axios from 'axios';

const api = axios.create({
  baseURL: 'https://image-upload-api-gusgalote.herokuapp.com',
});

export default api;
