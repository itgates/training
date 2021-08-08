import store from "../index";
import router from "../../router";

export default {
  login({ dispatch, commit }, credentials) {
    axios.get('/sanctum/csrf-cookie/').then(() => {
      axios.post('/login', credentials).then(() => {
        dispatch('getAuthUser');
      }).catch((error) => {
        if (error.response.status === 422) {
          store.dispatch('app/showError', { message: 'Invalid username or password.' })
        }
        commit('setIsLoading', false)
        commit('setIsSignInDisabled', false)
      })
    })
  },
  getAuthUser({ commit }) {
    axios.get('/api/user').then((response) => {
      localStorage.setItem('authenticated', JSON.stringify(true));
      localStorage.setItem('user', JSON.stringify(response.data));
      commit('setAuthenticated', true);
      commit('setAuth', response.data)
      router.push({ name: 'dashboard-analytics' }).then(() => {
        store.dispatch('app/showToast', 'Welcome Back');
        commit('setIsLoading', false)
        commit('setIsSignInDisabled', false)
      })
    }).catch((error) => {
      commit('setAuthenticated', false);
      commit('setAuth', null);
      commit('setIsLoading', false)
      commit('setIsSignInDisabled', false)
    })
  }
}
