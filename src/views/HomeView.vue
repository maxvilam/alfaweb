<template>
  <div class="home">
    <div class="form-group">
      <label for="correo">Correo</label>
      <input
        type="email"
        class="form-control"
        placeholder="Ingresa tu email"
        id="correo"
        v-model="email"
      />
    </div>
    <div class="form-group">
      <label for="contrasena">Password</label>
      <input
        placeholder="Ingresa tu Password"
        type="password"
        class="form-control"
        id="contrasena"
        v-model="password"
      />
    </div>
    <button type="submit" @click="login" class="btn btn-primary">
      Ingresar
    </button>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions } from "vuex";

export default {
  name: "HomeView",
  data() {
    return {
      email: "",
      password: "",
      error: "",
    };
  },
  methods: {
    ...mapActions(["loginFirebase"]),
    async login() {
      await this.loginFirebase({ email: this.email, password: this.password });
    },
  },
};
</script>
