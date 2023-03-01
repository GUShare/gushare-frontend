// initial state
const state = () => ({
  tokens: undefined
});

// getters
const getters = {
  isLoggedIn(state) {
    return state.tokens !== undefined;
  },
  getTokens(state) {
    return state.tokens;
  }
};

// actions
const actions = {};

// mutations
const mutations = {
  setTokens(state, value) {
    state.tokens = value;
  },
  unsetTokens(state) {
    state.tokens = undefined;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
