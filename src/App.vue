<template>
  <div class="app">
    <CatComposer />
  </div>
</template>

<script>
import CatComposer from './components/CatComposer.vue'
import './style.css'

export default {
  name: 'App',
  components: {
    CatComposer
  }
}
</script>