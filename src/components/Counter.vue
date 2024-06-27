<template>
    <div>
      <p>Count: {{ count }}</p>
      <p>Double Count: {{ doubleCount }}</p>
      <button @click="increment">Increment</button>
    </div>
  </template>
  
  <script setup>
  import { useCounterStore } from '../stores/counterStore';
  import { onMounted, onUnmounted, ref, watch } from 'vue';
  
  const counterStore = useCounterStore();
  const { count, increment, doubleCount } = counterStore;
  
  onMounted(() => {
    console.log('Component mounted');
  });
  
  onUnmounted(() => {
    console.log('Component unmounted');
  });
  
  watch(() => count.value, (newVal, oldVal) => {
    console.log(`Count changed from ${oldVal} to ${newVal}`);
  });
  
  const buttonRef = ref(null);
  </script>
  