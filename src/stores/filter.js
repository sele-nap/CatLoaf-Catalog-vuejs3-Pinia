import { defineStore } from 'pinia'

export const useFilterStore = defineStore('filter', {
  state: () => ({ breed: '', color: '' }),
  actions: {
    setBreed(breed) {
      this.breed = breed
    },
    setColor(color) {
      this.color = color
    },
    resetFilters() {
      this.breed = ''
      this.color = ''
    }
  }
})
