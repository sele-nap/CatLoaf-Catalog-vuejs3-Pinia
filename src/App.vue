<template>
  <div class="app">
    <header>
      <h1 @click="currentView = 'main'" :class="{ clickable: currentView !== 'main' }">Random cats</h1>
    </header>

    <Menu :currentView="currentView" @update:currentView="currentView = $event" />

    <main v-if="currentView === 'main'">
      <div class="cat-grid">
        <CatCard v-for="cat in getCats" :key="cat.id" :cat="cat" />
      </div>
    </main>

    <BookmarksView v-else-if="currentView === 'bookmarks'" @update:currentView="currentView = $event" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useCatStore } from './stores/catStore';
import CatCard from './components/CatCard.vue';
import BookmarksView from './components/BookmarksView.vue';
import Menu from './components/Menu.vue';

const catStore = useCatStore();
const { getCats } = catStore;

const currentView = ref('main');

const loadCats = async () => {
  await catStore.fetchCats();
};

onMounted(() => {
  loadCats();
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap');

.app {
  text-align: center;
  background-color: #fff0f5;
  padding: 20px;
  font-family: 'Lato', sans-serif;
}

header {
  background-color: #ffb6c1;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
}

.cat-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  justify-content: center;
  padding: 30px;
  max-width: 1000px;
  margin: 0 auto;
}

h1.clickable {
  cursor: pointer;
}
</style>
