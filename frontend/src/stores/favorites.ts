import { defineStore } from 'pinia';
import { api } from '../api';

export type Fav = {
  id: number;
  image_url: string;
  fact: string;
  name: string;
  created_at: string;
};

export const useFavorites = defineStore('favorites', {
  state: () => ({ items: [] as Fav[], loading: false }),
  actions: {
    async load() {
      this.loading = true;
      try {
        const { data } = await api.get('/favorites');
        this.items = data.items;
      } finally {
        this.loading = false;
      }
    },
    isFavorited(image_url: string) {
      return this.items.some(i => i.image_url === image_url);
    },
    async add(cat: Omit<Fav, 'id' | 'created_at'>) {
      if (this.isFavorited(cat.image_url)) return;
      try {
        const { data } = await api.post('/favorites', cat);
        this.items.unshift({
          id: data.id,
          created_at: new Date().toISOString(),
          ...cat,
        });
      } catch (e: any) {
        if (e?.response?.status === 409) return;
        throw e;
      }
    },
    async remove(id: number) {
      await api.delete(`/favorites/${id}`);
      this.items = this.items.filter(x => x.id !== id);
    },
  },
});
