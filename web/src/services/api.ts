import axios from 'axios';

const api = axios.create({
  baseURL: 'https://gusgalote-image-upload-api.herokuapp.com',
});

export default api;
