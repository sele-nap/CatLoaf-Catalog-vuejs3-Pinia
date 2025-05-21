<template>
  <div>
    <header>
      <h1>CatLoaf Catalog</h1>
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/catalog">Catalog</router-link> |
        <router-link to="/bookmarks">Bookmarks</router-link> |
        <button @click="toggleDarkMode">🌓</button>
      </nav>
    </header>
    <audio ref="lofi" src="/lofi.mp3" autoplay loop hidden></audio>
    <main><slot /></main>
    <footer><small>© 2025 CatLoaf Inc.</small></footer>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const lofi = ref(null)

onMounted(() => {
  lofi.value.volume = 0.25
})

function toggleDarkMode() {
  document.body.classList.toggle('dark')
}
</script>