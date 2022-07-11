import { defineStore } from 'pinia'

export const storeUser = defineStore({
  id: 'counter',
  state: () => ({
    user: JSON.parse(localStorage.getItem('user'))
  }),
  getters: {
    userName(state) {
      return state.user.username
    },
  },
  actions: {
    increment() {
      this.counter++
    }
  }
})
