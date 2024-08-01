<template>
  <nav class="menu">
    <button @click="switchView('main')" :class="{ active: currentView === 'main' }">Reload Cats</button>
    <button @click="switchView('bookmarks')" :class="{ active: currentView === 'bookmarks' }">My Bookmarks</button>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  currentView: {
    type: String,
    required: true
  }
});

const emit = defineEmits(['update:currentView']);

const switchView = (view) => {
  emit('update:currentView', view);
};
</script>

<style scoped>
.menu {
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 10px;
  background-color: #fff;
  border-radius: 50px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.horizontal-menu button {
  background: none;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  font-family: 'Lato', sans-serif;
  border-radius: 25px;
}

.horizontal-menu button.active {
  background-color: #ff69b4;
  color: #fff;
}

.horizontal-menu button:hover {
  background-color: #ff1493;
  color: #fff;
}
</style>
