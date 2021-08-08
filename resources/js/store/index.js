import Vue from 'vue'
import Vuex from 'vuex'

// Global vuex
import AppModule from './app'
import AuthModule from './auth'
import axios from "axios";

Vue.use(Vuex)

/**
 * Main Vuex Store
 */
const store = new Vuex.Store({
  modules: {
    app: AppModule,
    authentication: AuthModule
  },
  state: {
    thread: null
  },
  getters: {
    getThread(state) {
      return state.thread;
    }
  },
  mutations: {
    setThread(state, value) {
      state.thread = value;
    }
  },
  actions: {
    initializeStore({ commit }) {
      if (localStorage.getItem('authenticated')) {
        commit('authentication/setAuthenticated', true);
        commit('authentication/setAuth', JSON.parse(localStorage.getItem('user')))
      }
    },
    loadThread({ commit }) {
      axios.get('/api/threads/1').then((response) => {
        commit('setThread', response.data);
      })
    }

  }
})

export default store
