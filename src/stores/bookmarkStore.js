import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useBookmarkStore = defineStore('bookmarkStore', () => {
  const bookmarks = ref(JSON.parse(localStorage.getItem('catBookmarks')) || []);

  const getBookmarks = computed(() => bookmarks.value);

  const addBookmark = (cat) => {
    if (!bookmarks.value.some(bookmark => bookmark.id === cat.id)) {
      bookmarks.value.push(cat);
      updateLocalStorage();
    }
  };

  const removeBookmark = (catId) => {
    bookmarks.value = bookmarks.value.filter(bookmark => bookmark.id !== catId);
    updateLocalStorage();
  };

  const updateLocalStorage = () => {
    localStorage.setItem('catBookmarks', JSON.stringify(bookmarks.value));
  };

  return { getBookmarks, addBookmark, removeBookmark };
});