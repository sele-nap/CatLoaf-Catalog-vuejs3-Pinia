<template>
  <div class="bookmarks-view">
    <h2>My Bookmarked Cats</h2>
    <div class="cat-grid">
      <CatCard v-for="cat in bookmarks" :key="cat.id" :cat="cat" />
    </div>
    <p v-if="bookmarks.length === 0">No bookmarks yet. Start adding some cute cats!</p>
    <button @click="backToMain" class="menu-button">Back to Main</button>
  </div>
</template>

<script setup>
import { useBookmarkStore } from '../stores/bookmarkStore';
import CatCard from './CatCard.vue';

const bookmarkStore = useBookmarkStore();
const bookmarks = bookmarkStore.getBookmarks;

const emit = defineEmits(['update:currentView']);

const backToMain = () => {
  emit('update:currentView', 'main');
};
</script>

<style scoped>
.bookmarks-view {
  padding: 20px;
}

.cat-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  justify-content: center;
  padding: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

.menu-button {
  background-color: #ff69b4;
  border: 2px solid #ff69b4;
  border-radius: 25px;
  color: floralwhite;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  font-family: 'Lato', sans-serif;
  margin-top: 20px;
}

.menu-button:hover {
  background-color: #ff1493;
  border-color: #ff1493;
}

.menu-button:active {
  background-color: #ff007f;
  border-color: #ff007f;
}
</style>
