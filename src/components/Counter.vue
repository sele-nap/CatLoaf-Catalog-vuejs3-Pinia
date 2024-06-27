<template>
    <div>
      <p>Count: {{ count }}</p>
      <button @click="increment">Increment</button>
    </div>
  </template>
  
  <script setup>
  import { useCounterStore } from '../stores/counterStore';
  
  const counterStore = useCounterStore();
  const { count, increment } = counterStore;
  </script>
  