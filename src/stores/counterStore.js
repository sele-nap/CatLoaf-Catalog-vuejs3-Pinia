import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', () => {
  const state = {
    count: 0,
  };

  const increment = () => {
    state.count++;
  };

  return {
    ...state,
    increment,
  };
});
