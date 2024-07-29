<template>
  <div class="cat-card" @click="flipCard">
    <div v-if="!flipped">
      <img :src="cat.url" :alt="cat.name" />
      <h3>{{ cat.name }}</h3>
    </div>
    <div v-else>
      <p>{{ cat.fact }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useCatStore } from '../stores/catStore';

const props = defineProps({
  cat: Object,
});

const flipped = ref(false);
const catStore = useCatStore();

const flipCard = async () => {
  if (!props.cat.fact) {
    await catStore.fetchCatFact(props.cat.id);
  }
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
}
.cat-card img {
  max-width: 100%;
  border-radius: 10px;
}
</style>
