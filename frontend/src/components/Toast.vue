<template>
  <div v-if="msg" class="toast">
    <div class="tag">{{ msg }}</div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
const props = defineProps<{ text?: string }>();
const msg = ref('');
onMounted(() => { if (props.text) { msg.value = props.text; setTimeout(() => msg.value = '', 2000); } });
</script>