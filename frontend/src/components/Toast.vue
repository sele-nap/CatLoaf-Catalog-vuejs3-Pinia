<template>
  <div v-if="text || undo" class="toast">
    <div class="tag">
      <span>{{ text }}</span>
      <span v-if="undo" class="actions">
        <button class="link" @click="$emit('undo')">Undo</button>
      </span>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps<{ text?: string, undo?: boolean }>();
</script>
