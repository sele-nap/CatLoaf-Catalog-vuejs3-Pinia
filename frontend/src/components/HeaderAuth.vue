<template>
  <div class="auth">
    <template v-if="isAuthed">
      <button class="btn secondary status" type="button" aria-disabled="true" tabindex="-1">
        Logged in
      </button>
      <button class="btn secondary" @click="logout">Logout</button>
    </template>

    <template v-else>
      <button class="btn" @click="openModal('login')">Login</button>
      <button class="btn secondary" @click="openModal('register')">Register</button>
    </template>

    <div v-if="open" class="modal" @click.self="close">
      <div class="modal-card">
        <h3>{{ mode === 'login' ? 'Log in' : 'Create an account' }}</h3>

        <div class="row">
          <input class="input" v-model="email" placeholder="Email" />
        </div>

        <div class="row">
          <input class="input" type="password" v-model="password" placeholder="Password" />
        </div>

        <div class="row" style="justify-content:space-between; margin-top:10px;">
          <button class="btn" @click="submit" :disabled="loading">
            {{ mode === 'login' ? 'Login' : 'Register' }}
          </button>
          <span class="small" v-if="error">{{ error }}</span>
        </div>

        <div class="small" style="margin-top:8px;">
          <template v-if="mode === 'login'">
            No account?
            <a href="#" class="text-link" @click.prevent="mode = 'register'">Register</a>
          </template>
          <template v-else>
            Already have an account?
            <a href="#" class="text-link" @click.prevent="mode = 'login'">Login</a>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { useAuth } from '../stores/auth';

type Mode = 'login' | 'register';

const auth = useAuth();

const open = ref(false);
const mode = ref<Mode>('login');
const email = ref('');
const password = ref('');

const loading = computed(() => auth.loading);
const error = computed(() => auth.error);
const isAuthed = computed(() => auth.isAuthed);

function openModal(m: Mode) {
  mode.value = m;
  open.value = true;
}

function close() {
  open.value = false;
}

function clearFields() {
  email.value = '';
  password.value = '';
}

async function submit() {
  if (mode.value === 'login') {
    await auth.login(email.value, password.value);
  } else {
    await auth.register(email.value, password.value);
  }
  if (auth.isAuthed) {
    open.value = false;
    clearFields();
  }
}

function logout() {
  auth.logout();
}

watch(open, (val) => { if (!val) clearFields(); });
</script>