<template>
  <div :class="['cat-card', { flipped }]" @click="toggleFlip">
    <div class="cat-card-inner">
      <div class="cat-card-front">
        <img :src="cat.image" :alt="cat.name" style="width: 100px; height: 100px; object-fit: cover; border-radius: 50%;" />
        <h3>{{ cat.name }}</h3>
        <button @click.stop="toggleBookmark(cat)">
          {{ isBookmarked(cat.id) ? '💖 Remove' : '🤍 Bookmark' }}
        </button>
      </div>
      <div class="cat-card-back">
        <p>{{ cat.fact }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useBookmarkStore } from '@/stores/bookmark'

const props = defineProps({ cat: Object })
const bookmarks = useBookmarkStore()
const flipped = ref(false)
const audio = new Audio('/purr.mp3')

function toggleFlip() {
  flipped.value = !flipped.value
  audio.currentTime = 0
  audio.play()
}

function toggleBookmark(cat) {
  bookmarks.toggleBookmark(cat)
}

function isBookmarked(id) {
  return bookmarks.isBookmarked(id)
}
</script>
