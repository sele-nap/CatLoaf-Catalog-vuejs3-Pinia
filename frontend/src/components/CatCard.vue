<template>
  <div class="card" :class="{ flip }" @click="flip = !flip">
    <div class="card-inner">
      <div class="face front">
        <img class="img" :src="image_url" alt="chat" loading="lazy" />
        <div class="title">{{ name }}</div>
      </div>
      <div class="face back">
        <div class="title">Fun fact</div>
        <div class="small">{{ fact }}</div>
        <div class="row" style="justify-content:space-between;margin-top:auto;">
          <button class="btn secondary" @click.stop="$emit('refresh')">↻ Another</button>
          <button class="btn" @click.stop="$emit('favorite')">★ Favorite</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';


defineProps<{ image_url: string; fact: string; name: string }>();
const flip = ref(false);
</script>