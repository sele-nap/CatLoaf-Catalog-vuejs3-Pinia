import { defineStore } from 'pinia';
import { api, setAuthToken } from '../api';


export const useAuth = defineStore('auth', {
  state: () => ({ token: localStorage.getItem('token') as string | null, loading: false, error: '' as string }),
  getters: { isAuthed: (s) => !!s.token },
  actions: {
    init() { if (this.token) setAuthToken(this.token); },
    async register(email: string, password: string) {
      this.loading = true; this.error = '';
      try {
        const { data } = await api.post('/auth/register', { email, password });
        this.token = data.token; localStorage.setItem('token', data.token); setAuthToken(data.token);
      } catch (e: any) { this.error = e.response?.data?.error || 'Error'; } finally { this.loading = false; }
    },
    async login(email: string, password: string) {
      this.loading = true; this.error = '';
      try {
        const { data } = await api.post('/auth/login', { email, password });
        this.token = data.token; localStorage.setItem('token', data.token); setAuthToken(data.token);
      } catch (e: any) { this.error = e.response?.data?.error || 'Error'; } finally { this.loading = false; }
    },
    logout() { this.token = null; localStorage.removeItem('token'); setAuthToken(undefined); }
  }
});