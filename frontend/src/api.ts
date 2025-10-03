import axios from 'axios';

export const API_BASE = 'http://localhost:5174';

export const api = axios.create({ baseURL: API_BASE });

export function setAuthToken(token?: string) {
  if (token) api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  else delete api.defaults.headers.common['Authorization'];
}