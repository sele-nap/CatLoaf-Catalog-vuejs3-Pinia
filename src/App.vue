<template>
  <div class="app">
    <header>
      <h1 @click="currentView = 'main'" :class="{ clickable: currentView !== 'main' }">Random Cats</h1>
    </header>

    <Menu :currentView="currentView" @update:currentView="currentView = $event" />

    <main v-if="currentView === 'main'">
      <div v-if="getCats.length > 0" class="cat-grid">
        <CatCard v-for="cat in getCats" :key="cat.id" :cat="cat" />
      </div>
      <p v-else class="no-results">No cats found 😿</p>
    </main>

    <BookmarksView v-else-if="currentView === 'bookmarks'" @update:currentView="currentView = $event" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useCatalogStore } from './stores/catalog'
import CatCard from './components/CatCard.vue'
import BookmarksView from './views/BookmarksView.vue'
import Menu from './components/Menu.vue'

const currentView = ref('main')

const catalog = useCatalogStore()
const { getProducts: getCats, fetchCatalog } = catalog

onMounted(() => {
  fetchCatalog()
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap');

.app {
  text-align: center;
  background-color: var(--bg);
  padding: 20px;
  font-family: 'Lato', sans-serif;
}

header {
  background-color: var(--accent);
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
}

.cat-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  justify-content: center;
  padding: 30px;
  max-width: 1000px;
  margin: 0 auto;
}

h1.clickable {
  cursor: pointer;
}

.no-results {
  font-style: italic;
  color: var(--text);
  margin-top: 2rem;
}
</style>
