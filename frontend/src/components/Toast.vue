<template>
  <div v-if="visible" class="toast">
    <div class="tag">
      <span>{{ msg }}</span>
      <span v-if="undo" class="actions">
        <button class="link" @click="$emit('undo')">Undo</button>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onBeforeUnmount } from 'vue';

const props = defineProps<{
  text?: string;
  undo?: boolean;
  duration?: number;
}>();

const emit = defineEmits<{ (e: 'cleared'): void }>();

const msg = ref('');
const visible = ref(false);
let timer: ReturnType<typeof setTimeout> | null = null;

function schedule() {
  if (timer) { clearTimeout(timer); timer = null; }

  if (!props.text && !props.undo) {
    visible.value = false;
    msg.value = '';
    return;
  }

  msg.value = props.text ?? '';
  visible.value = true;

  timer = setTimeout(() => {
    visible.value = false;
    msg.value = '';
    emit('cleared');
  }, props.duration ?? 5000);
}

watch(() => [props.text, props.undo, props.duration], schedule, { immediate: true });

onBeforeUnmount(() => { if (timer) clearTimeout(timer); });
</script>
