<template>
  <div class="home">
    <h2>Crear Cuenta</h2>
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
    <button type="submit" @click="createuser" class="btn btn-primary">
      Ingresar
    </button>
  </div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
export default {
  name: "RegisterView",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async createuser() {
      const email = this.email;
      const password = this.password;

      const auth = getAuth();
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        console.log(userCredential);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style></style>
