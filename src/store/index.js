import Vue from "vue";
import Vuex from "vuex";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import router from "@/router";
import { db } from "@/helpers/firebase";
import { collection, getDocs } from "firebase/firestore";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isAuthenticated: false,
    cursos: [],
    editcurso: "",
  },
  getters: {
    getCursosFilter: (state) => (id) => {
      return state.cursos.filter((data) => data.id === id);
    },
  },
  mutations: {
    setIsAuthenticated(state, payload) {
      state.isAuthenticated = payload;
    },
    SET_DATA_CURSOS(state, payload) {
      state.cursos = payload;
    },
    SET_EDIT_CURSO(state, payload) {
      state.editcurso = payload;
    },
  },
  actions: {
    async getCursos({ commit }) {
      try {
        const querySnapshot = await getDocs(collection(db, "cursos"));
        const data = querySnapshot.docs.map((doc) => doc.data());
        console.log(data);
        commit("SET_DATA_CURSOS", data);
      } catch (e) {
        console.error(e);
      }
    },
    logout({ commit }) {
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
