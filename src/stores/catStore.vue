import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCatStore = defineStore('cat', () => {
  const cats = ref([]);

  const addCat = (name) => {
    cats.value.push({ id: Date.now(), name });
  };

  const removeCat = (id) => {
    cats.value = cats.value.filter(cat => cat.id !== id);
  };

  return {
    cats,
    addCat,
    removeCat,
  };
});
