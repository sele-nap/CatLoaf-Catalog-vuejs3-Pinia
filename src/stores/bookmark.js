import { defineStore } from 'pinia'

export const useBookmarkStore = defineStore('bookmark', {
  state: () => ({ bookmarks: [] }),
  actions: {
    toggleBookmark(cat) {
      const index = this.bookmarks.findIndex(c => c.id === cat.id)
      if (index !== -1) {
        this.bookmarks.splice(index, 1)
      } else {
        this.bookmarks.push(cat)
      }
    },
    isBookmarked(catId) {
      return this.bookmarks.some(c => c.id === catId)
    }
  }
})
