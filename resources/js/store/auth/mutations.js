export default {
  setAuthenticated(state, value) {
    state.authenticated = value;
  },
  setAuth(state, value) {
    state.user = value;
  },
  setIsLoading(state, value) {
    state.isLoading = value;
  },
  setIsSignInDisabled(state, value) {
    state.isSignInDisabled = value;
  }
}
