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
        thread: null,
        todos: [],
        todo: null
    },
    getters: {
        getThread(state) {
            return state.thread;
        },
        getTodos(state) {
            return state.todos;
        },
        getTodo(state) {
            return state.todo;
        }
    },
    mutations: {
        setThread(state, value) {
            state.thread = value;
        },
        setTodos(state, value) {
            state.todo = value;
        },
        setTodo(state, value) {
            state.todo = value;
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
        },
        loadTodos({ commit }) {
            axios.get('/api/todos').then((response) => {
                commit('setTodos', response.data);
            })
        },
        loadTodo({ commit }, value) {
            axios.get(`/api/todos/${value}`).then((response) => {
                commit('setTodo', response.data);
            })
        }

    }
})

export default store