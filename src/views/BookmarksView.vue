<template>
  <MainLayout>
    <h2>My Favorite Cats 😽</h2>
    <div class="grid">
      <CatCard v-for="cat in bookmarks.bookmarks" :key="cat.id" :cat="cat" />
    </div>
  </MainLayout>
</template>

<script setup>
import { useBookmarkStore } from '@/stores/bookmark'
import CatCard from '@/components/CatCard.vue'
import MainLayout from '@/layouts/MainLayout.vue'

const bookmarks = useBookmarkStore()
</script>
