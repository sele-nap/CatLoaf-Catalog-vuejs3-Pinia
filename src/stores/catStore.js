import { defineStore } from 'pinia';
import axios from 'axios';

export const useCatStore = defineStore('cats', {
  state: () => ({
    cats: [],
    loading: false,
    error: null,
  }),
  actions: {
    async fetchCats() {
      this.loading = true;
      try {
        const response = await axios.get('https://api.thecatapi.com/v1/images/search?limit=10');
        this.cats = response.data;
      } catch (error) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },
  },
  getters: {
    getCatCount: (state) => state.cats.length,
  },
});