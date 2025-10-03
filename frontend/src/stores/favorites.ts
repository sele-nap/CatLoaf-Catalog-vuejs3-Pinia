import { defineStore } from 'pinia';
import { api } from '../api';


export type Fav = { id: number; image_url: string; fact: string; name: string; created_at: string };


export const useFavorites = defineStore('favorites', {
  state: () => ({ items: [] as Fav[], loading: false }),
  actions: {
    async load() { this.loading = true; try { const { data } = await api.get('/favorites'); this.items = data.items; } finally { this.loading = false; } },
    async add(cat: Omit<Fav, 'id' | 'created_at'>) { const { data } = await api.post('/favorites', cat); this.items.unshift({ id: data.id, created_at: new Date().toISOString(), ...cat }); },
    async remove(id: number) { await api.delete(`/favorites/${id}`); this.items = this.items.filter(x => x.id !== id); }
  }
});