import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { fetchCatImages, fetchCatFacts } from '@/services/catService'

export const useCatalogStore = defineStore('catalog', () => {
  const products = ref([])
  const getProducts = computed(() => products.value)

  const firstNames = ['Whiskers', 'Fluffy', 'Mittens', 'Luna', 'Oliver', 'Leo', 'Milo', 'Kitty']
  const lastNames = ['Pawsome', 'Purrington', 'Meowser', 'Clawsome', 'Furbottom']

  const generateFunnyName = () => {
    const first = firstNames[Math.floor(Math.random() * firstNames.length)]
    const last = lastNames[Math.floor(Math.random() * lastNames.length)]
    return `${first} ${last}`
  }

const fetchCatalog = async () => {
  try {
    const catData = await fetchCatImages(10)
    const catFacts = await fetchCatFacts(catData.length)
    products.value = catData.map((cat, index) => ({
      id: cat.id,
      image: cat.url,
      name: generateFunnyName(),
      fact: catFacts[index]
    }))
    console.log('[DEBUG] Cats loaded:', products.value)
  } catch (error) {
    console.error('Error loading catalog:', error)
  }
}

  return { getProducts, fetchCatalog }
})
