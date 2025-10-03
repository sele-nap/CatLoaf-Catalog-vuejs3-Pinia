<template>
  <div class="container">
    <header class="header">
      <div class="brand">🐾 Cozy Cats</div>
      <HeaderAuth />
    </header>

    <div class="row" style="margin:8px 0 16px">
      <button class="btn" @click="fetchCats">New cats</button>
      <button class="btn secondary" v-if="auth.isAuthed" @click="toggleShowFavs">
        {{ showFavs ? 'Show cards' : 'View my favorites' }}
      </button>
    </div>

    <section v-if="!showFavs" class="grid">
      <CatCard v-for="(c, i) in cats" :key="i" v-bind="c" :is-favorite="favs.isFavorited(c.image_url)"
        @refresh="replace(i)" @favorite="favorite(c)" @toggle-favorite="toggleFavorite(c)" />
    </section>

    <section v-else class="grid">
      <div v-for="f in favs.items" :key="f.id" class="card" @click="">
        <div class="card-inner">
          <div class="face front">
            <button class="icon-btn remove" title="Remove" @click.stop="removeFav(f.id)">✕</button>
            <img class="img" :src="f.image_url" alt="cat" />
            <div class="title">{{ f.name }} <span class="tag">favorite</span></div>
          </div>
          <div class="face back">
            <div class="title">Fact</div>
            <div class="small">{{ f.fact }}</div>
            <div class="row" style="justify-content:flex-end;margin-top:auto;">
              <button class="btn secondary" @click.stop="removeFav(f.id)">Remove</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Toast :text="toast" :undo="!!lastDeleted" @undo="undoDelete" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { api } from './api';
import { useAuth } from './stores/auth';
import { useFavorites } from './stores/favorites';
import CatCard from './components/CatCard.vue';
import HeaderAuth from './components/HeaderAuth.vue';
import Toast from './components/Toast.vue';

const auth = useAuth();
const favs = useFavorites();
const toast = ref('');
const showFavs = ref(false);

export type Cat = { image_url: string; fact: string; name: string };
const cats = ref<Cat[]>([]);

const lastDeleted = ref<null | { timer: any, item: any }>(null);

async function fetchOne(): Promise<Cat> {
  const { data } = await api.get('/cats/random');
  return data as Cat;
}

async function fetchCats() { cats.value = await Promise.all(Array.from({ length: 8 }).map(() => fetchOne())); }
async function replace(i: number) { cats.value[i] = await fetchOne(); }

async function favorite(c: Cat) {
  if (!auth.isAuthed) { toast.value = 'Log in to add a favorite'; return; }
  if (favs.isFavorited(c.image_url)) { toast.value = 'Already in favorites'; return; }
  await favs.add(c as any);
  toast.value = 'Added to favorites!';
}

async function toggleFavorite(c: any) {
  if (!auth.isAuthed) { toast.value = 'Log in to manage favorites'; return; }
  if (favs.isFavorited(c.image_url)) {
    const removed = await favs.removeByImage(c.image_url);
    toast.value = 'Removed from favorites';
    if (lastDeleted.value?.timer) clearTimeout(lastDeleted.value.timer);
    lastDeleted.value = {
      item: removed,
      timer: setTimeout(() => { lastDeleted.value = null; }, 5000)
    };
  } else {
    await favs.add(c as any);
    toast.value = 'Added to favorites!';
  }
}

async function undoDelete() {
  const payload = lastDeleted.value?.item;
  if (!payload) return;
  await favs.add({ image_url: payload.image_url, fact: payload.fact, name: payload.name } as any);
  toast.value = 'Restored to favorites';
  if (lastDeleted.value?.timer) clearTimeout(lastDeleted.value.timer);
  lastDeleted.value = null;
}

async function removeFav(id: number) {
  await favs.remove(id);
  toast.value = 'Favorite removed';
}

function toggleShowFavs() { showFavs.value = !showFavs.value; if (showFavs.value) favs.load(); }

onMounted(() => { auth.init(); fetchCats(); });
</script>
