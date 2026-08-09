<template>
  <div class="auth">
    <template v-if="isAuthed">
      <button
        class="btn secondary status"
        type="button"
        aria-disabled="true"
        tabindex="-1"
      >
        Logged in
      </button>
      <button class="btn secondary" @click="logout">Logout</button>
    </template>

    <template v-else>
      <button class="btn" @click="openModal('login')">Login</button>
      <button class="btn secondary" @click="openModal('register')">
        Register
      </button>
    </template>

    <div v-if="open" class="modal" @click.self="close">
      <div class="auth-modal">
        <div class="auth-form">
          <div class="auth-form-inner">
            <div class="auth-brand">🐾 Cozy Cats</div>

            <h3 class="auth-title">
              {{ mode === 'login' ? 'Meow back' : 'Create an account' }}
            </h3>
            <p class="auth-subtitle">
              {{
                mode === 'login'
                  ? 'Please enter your details'
                  : 'Sign up to save your favorites'
              }}
            </p>

            <label class="field-label">Email</label>
            <input class="input" v-model="email" placeholder="you@meow.cat" />

            <label class="field-label">Password</label>
            <input
              class="input"
              type="password"
              v-model="password"
              placeholder="••••••••"
            />

            <span class="auth-error" v-if="error">{{ error }}</span>

            <button class="auth-submit" @click="submit" :disabled="loading">
              {{ mode === 'login' ? 'Sign in' : 'Create account' }}
            </button>

            <div class="auth-switch">
              <template v-if="mode === 'login'">
                No account?
                <a href="#" class="text-link" @click.prevent="mode = 'register'"
                  >Create an account</a
                >
              </template>
              <template v-else>
                Already have an account?
                <a href="#" class="text-link" @click.prevent="mode = 'login'"
                  >Sign in</a
                >
              </template>
            </div>
          </div>
        </div>

        <div class="auth-visual">
          <img src="/black-cat-auth.jpg" alt="" class="auth-visual-img" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
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

watch(open, (val) => {
  if (!val) clearFields();
});
</script>
