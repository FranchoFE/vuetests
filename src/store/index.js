import { createStore } from "vuex";

export default createStore({
  state: {
    count: 1,
    loggedUser: "",
  },
  getters: {
    getCount(state) {
      return state.count;
    },
    getLoggedUserName(state) {
      return state.loggedUser;
    },
  },
  mutations: {
    calcNewValue(state) {
      state.count = state.count * 2;
    },
    setLoggedUser(state, name) {
      console.log("setLoggedUser", name);
      state.loggedUser = name;
    },
  },
  actions: {},
  modules: {},
});
