<template>
  <div>
    <h2>Administración</h2>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">Curso</th>
          <th scope="col">Cupos</th>
          <th scope="col">Inscritos</th>
          <th scope="col">Duración</th>
          <th scope="col">Costo</th>
          <th scope="col">Terminado</th>
          <th scope="col">Fecha</th>
          <th scope="col">Editar</th>
          <th scope="col">Eliminar</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(curso, i) in cursos" :key="i">
          <th>{{ curso.nombre }}</th>
          <td>{{ curso.cupos }}</td>
          <td>{{ curso.inscritos }}</td>
          <td>{{ curso.duracion }}</td>
          <td>{{ curso.costo }}</td>
          <td>{{ curso.estado ? "Sí" : "No" }}</td>
          <td>{{ curso.fecha }}</td>
          <td>
            <span @click="linkeditcurso(curso.codigo)" class="fotmat-icon"
              >🛠</span
            >
          </td>
          <td>
            <span @click="linkeditcurso(curso.codigo)" class="fotmat-icon"
              >🧺</span
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapMutations } from "vuex";

/* import { mapActions, mapState } from "vuex";
 */
export default {
  name: "AdminView",
  computed: {
    ...mapState(["cursos"]),
  },
  methods: {
    ...mapMutations(["SET_EDIT_CURSO"]),
    linkeditcurso(id) {
      this.SET_EDIT_CURSO(id);
      this.$router.push("/edit-curso");
    },
  },
};
</script>

<style></style>
