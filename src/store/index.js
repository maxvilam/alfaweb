import Vue from "vue";
import Vuex from "vuex";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import router from "@/router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isAuthenticated: false,
  },
  getters: {},
  mutations: {
    setIsAuthenticated(state, payload) {
      state.isAuthenticated = payload;
    },
  },
  actions: {
    logout(commit) {
      localStorage.removeItem("isAuthenticated");
      localStorage.removeItem("user");
      commit("setIsAuthenticated", false);
      router.push("/");
    },

    async loginFirebase({ commit }, payload) {
      const email = payload.email;
      const password = payload.password;

      const auth = getAuth();
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        commit("setIsAuthenticated", true);
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("userid", email);
        console.log("userCredential", userCredential);
        router.push("/cursos");
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {},
});
