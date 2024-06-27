<template>
    <div class="cat-composer">
      <h1>{{ title }}</h1>
      <button @click="fetchCats">Fetch Cats</button>
      <p>Cat Count: {{ catCount }}</p>
      <input v-model="searchTerm" placeholder="Search cats by name" />
      <div v-if="loading">Loading...</div>
      <div v-else-if="error">Error: {{ error }}</div>
      <ul v-else class="cat-list">
        <li v-for="cat in filteredCats" :key="cat.id" class="cat-item">
          <img :src="cat.url" :alt="cat.name" />
          <p>{{ cat.name }}</p>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { ref, computed, watch, onMounted, provide } from 'vue';
  import { storeToRefs } from 'pinia';
  import { useCatStore } from '../stores/catStore';
  
  export default {
    name: 'CatComposer',
    setup() {
      const title = ref('CatComposer');
      const searchTerm = ref('');
  
      const catStore = useCatStore();
      const { cats, loading, error } = storeToRefs(catStore);
      const { fetchCats } = catStore;
  
      const filteredCats = computed(() => {
        return cats.value.filter(cat => 
          cat.name.toLowerCase().includes(searchTerm.value.toLowerCase())
        );
      });
  
      const catCount = computed(() => catStore.getCatCount);
  
      watch(searchTerm, (newValue, oldValue) => {
        console.log(`Search term changed from "${oldValue}" to "${newValue}"`);
      });
  
      onMounted(() => {
        console.log('Component mounted');
        fetchCats();
      });
  
      provide('appTitle', title);
  
      return {
        title,
        searchTerm,
        cats,
        loading,
        error,
        fetchCats,
        filteredCats,
        catCount,
      };
    },
  };
  </script>