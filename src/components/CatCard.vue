<template>
  <div class="cat-card" @click="flipCard">
    <div v-if="!flipped" class="card-front">
      <img :src="cat.url" :alt="cat.name" />
      <h3>{{ cat.name }}</h3>
    </div>
    <div v-else class="card-back">
      <p>{{ cat.fact }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  cat: {
    type: Object,
    required: true
  }
});

const flipped = ref(false);

const flipCard = () => {
  flipped.value = !flipped.value;
};
</script>

<style scoped>
.cat-card {
  background-color: #ffe4e1;
  border: 1px solid #ffccd5;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
  cursor: pointer;
  width: 150px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
}

.cat-card img {
  max-width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
}

.card-back {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  overflow-y: auto;
  padding: 10px;
  box-sizing: border-box;
}

.card-back p {
  margin: 0;
  text-align: center;
}
</style>