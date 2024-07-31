<template>
  <div class="app">
    <header>
      <h1>Random Cats</h1>
      <button @click="loadCats" class="reload-button">Reload Cats</button>
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
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap');
.app {
  text-align: center;
  background-color: #fff0f5;
  padding: 20px;
  font-family: 'Lato', sans-serif;
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
  padding: 30px;
}
.reload-button {
  background-color: #ff69b4;
  border: 2px solid #ff69b4;
  border-radius: 25px;
  color: floralwhite;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  font-family: 'Lato', sans-serif;
}
.reload-button:hover {
  background-color: #ff1493;
  border-color: #ff1493;
}
.reload-button:active {
  background-color: #ff007f;
  border-color: #ff007f;
}
</style>