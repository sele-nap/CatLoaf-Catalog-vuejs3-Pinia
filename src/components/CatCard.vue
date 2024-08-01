<template>
  <div class="cat-card" @click="flipCard">
    <div class="card-inner" :class="{ flipped }">
      <div class="card-front">
        <img :src="cat.url" :alt="cat.name" />
        <h3>{{ cat.name }}</h3>
      </div>
      <div class="card-back">
        <p>{{ cat.fact }}</p>
      </div>
    </div>
    <button @click.stop="toggleBookmark" class="bookmark-btn">
      {{ isBookmarked ? '★' : '☆' }}
    </button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useBookmarkStore } from '../stores/bookmarkStore';

const props = defineProps({
  cat: {
    type: Object,
    required: true
  }
});

const bookmarkStore = useBookmarkStore();
const flipped = ref(false);

const isBookmarked = computed(() => 
  bookmarkStore.getBookmarks.some(bookmark => bookmark.id === props.cat.id)
);

const toggleBookmark = () => {
  if (isBookmarked.value) {
    bookmarkStore.removeBookmark(props.cat.id);
  } else {
    bookmarkStore.addBookmark(props.cat);
  }
};

const flipCard = () => {
  flipped.value = !flipped.value;
};
</script>

<style scoped>
.cat-card {
  perspective: 1000px;
  width: 150px;
  height: 250px;
  position: relative;
}

.card-inner {
  position: absolute;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.card-front, .card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
}

.card-front {
  background-color: #ffe4e1;
  border: 1px solid #ffccd5;
  border-radius: 10px;
  z-index: 2;
  transform: rotateY(0deg);
  justify-content: center;
  padding: 10px;
  box-sizing: border-box;
}

.card-back {
  background-color: #ffe4e1;
  border: 1px solid #ffccd5;
  border-radius: 10px;
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 10px;
  overflow-y: auto;
  box-sizing: border-box;
}

.card-inner.flipped {
  transform: rotateY(180deg);
}

.card-front img {
  max-width: 100%;
  max-height: 60%;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 10px;
}

.card-front h3 {
  margin: 0;
  padding: 0;
}

.card-back p {
  margin: 0;
  text-align: center;
  max-width: 100%;
}

.bookmark-btn {
  position: absolute;
  bottom: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #ff69b4;
}
</style>
