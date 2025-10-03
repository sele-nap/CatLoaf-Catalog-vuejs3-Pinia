<template>
  <div class="card" :class="{ flip }" @click="flip = !flip">
    <div class="card-inner">
      <div class="face front">
        <span v-if="isFavorite" class="fav-badge">★ Favorite</span>
        <img class="img" :src="image_url" alt="cat" loading="lazy" />
        <div class="title">{{ name }}</div>
      </div>
      <div class="face back">
        <div class="title">Fun fact</div>
        <div class="small">{{ fact }}</div>
        <div class="row" style="justify-content:space-between;margin-top:auto;">
          <button class="btn secondary" @click.stop="$emit('refresh')">↻ Another</button>
          <button class="btn" :disabled="isFavorite" @click.stop="$emit('favorite')">
            {{ isFavorite ? '★ Favorited' : '★ Favorite' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
defineProps<{ image_url: string; fact: string; name: string; isFavorite?: boolean }>();
const flip = ref(false);
</script>
