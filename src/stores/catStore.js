import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { useFetch } from '@vueuse/core';

export const useCatStore = defineStore('catStore', () => {
  const cats = ref([]);
  const getCats = computed( () => cats);

  const firstNames = ['Whiskers', 'Fluffy', 'Mittens', 'Luna', 'Oliver', 'Leo', 'Milo', 'Kitty', 'Nala', 'Simba', 'Bella', 'Lucy', 'Charlie', 'Max', 'Tiger'];
  const lastNames = ['Pawsome', 'Purrington', 'Meowser', 'Clawsome', 'Whiskerston', 'Furbottom', 'Tailchaser', 'Scratchington', 'Fluffster', 'Purrfect'];

  const generateFunnyName = () => {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    return `${firstName} ${lastName}`;
  };

  const fetchCats = async () => {
    const { data, error } = await useFetch('https://api.thecatapi.com/v1/images/search?limit=10');
    
    if (error.value) {
      console.error(error.value);
      return;
    }

    const catData = JSON.parse(data.value);
    const catFacts = await fetchCatFacts(catData.length);
    cats.value = catData.map((cat, index) => ({
      id: cat.id,
      url: cat.url,
      name: generateFunnyName(),
      fact: catFacts[index]
    }));
  };

  const fetchCatFacts = async (count) => {
    const { data, error } = await useFetch(`https://meowfacts.herokuapp.com/?count=${count}`);
    if (error.value) {
      console.error(error.value);
      return [];
    }
    return JSON.parse(data.value).data;
  };

  return { getCats, fetchCats, fetchCatFacts };
});