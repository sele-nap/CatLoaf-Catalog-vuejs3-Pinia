<template>
  <div class="app">
    <header>
      <h1>Random Cats</h1>
      <button @click="loadCats">Reload Cats</button>
    </header>
    <div class="cat-grid">
      <CatCard v-for="cat in getCats" :key="cat.id" :cat="cat" />
    </div>
    <p>Number of cats: {{ getCats.length }}</p>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useCatStore } from './stores/catStore';
import CatCard from './components/CatCard.vue';

const catStore = useCatStore();
const { getCats } = catStore;

const loadCats = async () => {
  await catStore.fetchCats();
};

onMounted(() => {
  loadCats();
});
</script>

<style scoped>
.app {
  text-align: center;
  background-color: #fff0f5;
  padding: 20px;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #ffb6c1;
  border-radius: 10px;
}
.cat-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}
</style>
