import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import CatalogView from '@/views/CatalogView.vue'
import BookmarksView from '@/views/BookmarksView.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/catalog', name: 'Catalog', component: CatalogView },
  { path: '/bookmarks', name: 'Bookmarks', component: BookmarksView },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router