import { defineStore } from 'pinia';

export const useCatStore = defineStore('cat', () => {
  const state = {
    cats: [],
  };

  const addCat = (name) => {
    state.cats.push({ id: Date.now(), name });
  };

  const removeCat = (id) => {
    state.cats = state.cats.filter(cat => cat.id !== id);
  };

  return {
    ...state,
    addCat,
    removeCat,
  };
});
