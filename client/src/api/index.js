import axios from 'axios';

import { parseToken } from '@/helpers';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.defaults.headers.delete = { 'Content-Type': 'application/json;charset=utf-8' };

api.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${parseToken(localStorage)}`;
  return config;
});

export default api;
