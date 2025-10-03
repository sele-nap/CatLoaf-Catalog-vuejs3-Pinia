<template>
  <div class="auth">
    <template v-if="isAuthed">
      <span class="tag">Logged in</span>
      <button class="btn secondary" @click="logout">Logout</button>
    </template>
    <template v-else>
      <button class="btn" @click="open = true">Login / Register</button>
    </template>


    <div v-if="open" class="modal" @click.self="open = false">
      <div class="modal-card">
        <h3>Welcome 😺</h3>
        <div class="row"><input class="input" v-model="email" placeholder="Email" /></div>
        <div class="row"><input class="input" type="password" v-model="password" placeholder="Password" /></div>
        <div class="row" style="justify-content:space-between; margin-top:10px;">
          <button class="btn" @click="doLogin" :disabled="loading">Login</button>
          <button class="btn secondary" @click="doRegister" :disabled="loading">Register</button>
          <span class="small" v-if="error">{{ error }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue';
import { useAuth } from '../stores/auth';


const auth = useAuth();
const open = ref(false);
const email = ref('');
const password = ref('');
const loading = computed(() => auth.loading);
const error = computed(() => auth.error);
const isAuthed = computed(() => auth.isAuthed);


function logout() { auth.logout(); }
async function doLogin() { await auth.login(email.value, password.value); if (auth.isAuthed) open.value = false; }
async function doRegister() { await auth.register(email.value, password.value); if (auth.isAuthed) open.value = false; }
</script>