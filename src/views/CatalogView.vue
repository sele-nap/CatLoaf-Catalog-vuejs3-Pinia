<template>
  <MainLayout>
    <h2>Cats Available for Adoption</h2>
    <div class="filters">
      <label>
        Breed:
        <input v-model="filter.breed" placeholder="e.g. Maine Coon" />
      </label>
      <label>
        Color:
        <input v-model="filter.color" placeholder="e.g. Black" />
      </label>
    </div>
    <div v-if="filteredCats.length > 0" class="grid">
      <CatCard v-for="cat in filteredCats" :key="cat.id" :cat="cat" />
    </div>
    <p v-else class="no-results">No cats found matching your filters 😿</p>
  </MainLayout>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useCatalogStore } from '@/stores/catalog'
import { useFilterStore } from '@/stores/filter'
import CatCard from '@/components/CatCard.vue'
import MainLayout from '@/layouts/MainLayout.vue'

const catalog = useCatalogStore()
const filter = useFilterStore()
onMounted(() => catalog.fetchCatalog())

const filteredCats = computed(() => {
  return catalog.getProducts.filter(cat => {
    const breedMatch = filter.breed ? cat.name.toLowerCase().includes(filter.breed.toLowerCase()) : true
    const colorMatch = filter.color ? cat.fact.toLowerCase().includes(filter.color.toLowerCase()) : true
    return breedMatch && colorMatch
  })
})
</script>
