import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useFetch } from '@vueuse/core';


export const useCatStore = defineStore('catStore', () => {
  const cats = ref([]);

  const firstNames = ['Whiskers', 'Fluffy', 'Mittens', 'Luna', 'Oliver', 'Leo', 'Milo', 'Kitty', 'Nala', 'Simba', 'Bella', 'Lucy', 'Charlie', 'Max', 'Tiger'];
  const lastNames = ['Pawsome', 'Purrington', 'Meowser', 'Clawsome', 'Whiskerston', 'Furbottom', 'Tailchaser', 'Scratchington', 'Fluffster', 'Purrfect'];

  const generateFunnyName = () => {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    return `${firstName} ${lastName}`;
  };

  const fetchCats = async () => {
    try {
      const { data, error } = await useFetch('https://api.thecatapi.com/v1/images/search?limit=10').json();
      
      if (error) {
        console.error('Failed to fetch cats:', error);
        return;
      }

      const catData = data.value;

      console.log('Fetched cats data:', catData);

      if (Array.isArray(catData)) {
        cats.value = catData.map(cat => ({
          id: cat.id,
          url: cat.url,
          name: generateFunnyName(),
          fact: ''
        }));
      } else {
        console.error('Unexpected data format:', catData);
      }
    } catch (err) {
      console.error('Error in fetchCats:', err);
    }
  };

  const fetchCatFact = async (catId) => {
    try {
      const { data, error } = await useFetch('https://meowfacts.herokuapp.com/').json();
      
      if (error) {
        console.error('Failed to fetch cat fact:', error);
        return;
      }

      const catFactData = data.value;
      
      console.log('Fetched cat fact data:', catFactData);

      const cat = cats.value.find(cat => cat.id === catId);
      if (cat) cat.fact = catFactData.fact;
    } catch (err) {
      console.error('Error in fetchCatFact:', err);
    }
  };

  return { cats, fetchCats, fetchCatFact };
});