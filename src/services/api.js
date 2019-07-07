import axios from 'axios';
import { AsyncStorage } from 'react-native';

const api = axios.create({
  baseURL: 'http://10.0.3.2:5000',
  headers: { plataform: 'mobile' },
});

api.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem('@DonJuan:token');
  const headers = { ...config.headers };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return { ...config, headers };
});

export default api;
