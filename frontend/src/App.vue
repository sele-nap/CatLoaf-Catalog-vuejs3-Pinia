<template>
  <div class="container">
    <header class="header">
      <div class="brand">🐾 Cozy Cats</div>
      <HeaderAuth />
    </header>


    <div class="row" style="margin:8px 0 16px">
      <button class="btn" @click="fetchCats">New cats</button>
      <button class="btn secondary" v-if="auth.isAuthed" @click="toggleShowFavs">
        {{ showFavs ? 'Show cards' : 'Show my favorites' }}
      </button>
    </div>


    <section v-if="!showFavs" class="grid">
      <CatCard v-for="(c, i) in cats" :key="i" v-bind="c" @refresh="replace(i)" @favorite="favorite(c)" />
    </section>


    <section v-else class="grid">
      <div v-for="f in favs.items" :key="f.id" class="card">
        <div class="card-inner">
          <div class="face front">
            <img class="img" :src="f.image_url" alt="chat" />
            <div class="title">{{ f.name }} <span class="tag">favorite</span></div>
          </div>
          <div class="face back">
            <div class="title">Fact</div>
            <div class="small">{{ f.fact }}</div>
            <div class="row" style="justify-content:flex-end;margin-top:auto;">
              <button class="btn secondary" @click.stop="removeFav(f.id)">Retirer</button>
            </div>
          </div>
        </div>
      </div>
    </section>


    <Toast :text="toast" />
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


async function fetchOne(): Promise<Cat> {
  const { data } = await api.get('/cats/random');
  return data as Cat;
}


async function fetchCats() { cats.value = await Promise.all(Array.from({ length: 8 }).map(() => fetchOne())); }
async function replace(i: number) { cats.value[i] = await fetchOne(); }


async function favorite(c: Cat) {
  if (!auth.isAuthed) { toast.value = 'Log in to add a favoritete'; return; }
  await favs.add(c as any);
  toast.value = 'Ajouté aux favoris !';
}


function toggleShowFavs() { showFavs.value = !showFavs.value; if (showFavs.value) favs.load(); }
async function removeFav(id: number) { await favs.remove(id); toast.value = 'Favorite removed'; }


onMounted(() => { auth.init(); fetchCats(); });
</script>