<template>
    <div>
      <h2>Cat List</h2>
      <ul>
        <li v-for="cat in cats" :key="cat.id">
          {{ cat.name }}
          <button @click="removeCat(cat.id)">Remove</button>
        </li>
      </ul>
      <input v-model="newCatName" placeholder="Add a new cat" />
      <button @click="addNewCat">Add Cat</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useCatStore } from '../stores/catStore';
  
  const catStore = useCatStore();
  const { cats, addCat, removeCat } = catStore;
  
  const newCatName = ref('');
  
  const addNewCat = () => {
    if (newCatName.value.trim()) {
      addCat(newCatName.value);
      newCatName.value = '';
    }
  };
  </script>
  