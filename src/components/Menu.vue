<template>
  <nav class="menu">
    <button @click="$emit('update:currentView', 'main')">🐱 Cats</button>
    <button @click="$emit('update:currentView', 'bookmarks')">💖 Bookmarks</button>
  </nav>
</template>

<script setup>
defineProps(['currentView'])
</script>

<style scoped>
.menu {
  margin: 20px auto;
  display: flex;
  justify-content: center;
  gap: 1rem;
}

button {
  background-color: var(--accent);
  border: none;
  padding: 0.5rem 1rem;
  color: white;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
}

button:hover {
  background-color: var(--accent-hover);
}
</style>
