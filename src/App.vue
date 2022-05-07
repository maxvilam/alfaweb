<template>
  <div id="app">
    <nav>
      <section>
        <router-link to="/">Home</router-link> |
        <template v-if="!logeado">
          <router-link to="/login">Login</router-link>
        </template>
        <template v-else>
          <button @click="out">Logout</button>
        </template>
      </section>
      <section>
        <template v-if="!logeado">
          <h1>no logeado</h1>
        </template>
        <template v-else>
          <h1>{{ userlogin }}</h1>
          <h2>Eddi</h2>
        </template>
      </section>
    </nav>
    <router-view />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "App",
  data() {
    return {
      userid: "",
      userlogin: "",
    };
  },
  methods: {
    ...mapActions(["logout"]),
    out() {
      const user = this.userid;
      this.logout();
      this.userlogin = user;
    },
  },

  computed: {
    ...mapState(["isAuthenticated"]),
    logeado() {
      return this.isAuthenticated ? true : false;
    },
    user() {
      return JSON.parse(localStorage.getItem("email"));
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
