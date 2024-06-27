import { defineStore } from 'pinia';
import axios from 'axios';

// Array of cat name parts
const firstNames = ['Whiskers', 'Fluffy', 'Mittens', 'Luna', 'Oliver', 'Leo', 'Milo', 'Kitty', 'Nala', 'Simba', 'Bella', 'Lucy', 'Charlie', 'Max', 'Tiger'];
const lastNames = ['Pawsome', 'Purrington', 'Meowser', 'Clawsome', 'Whiskerston', 'Furbottom', 'Tailchaser', 'Scratchington', 'Fluffster', 'Purrfect'];

// Function to generate a random cat name
function generateCatName() {
  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  return `${firstName} ${lastName}`;
}

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
        this.cats = response.data.map(cat => ({
          ...cat,
          name: generateCatName()
        }));
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