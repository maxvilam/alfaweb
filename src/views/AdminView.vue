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
              ><b-iconstack font-scale="3">
                <b-icon
                  stacked
                  icon="pencil"
                  variant="primary"
                  scale="0.75"
                ></b-icon> </b-iconstack
            ></span>
          </td>
          <td>
            <span @click="linkeditcurso(curso.codigo)" class="fotmat-icon"
              ><b-iconstack font-scale="3">
                <b-icon
                  stacked
                  icon="trash-fill"
                  variant="primary"
                  scale="0.75"
                ></b-icon> </b-iconstack
            ></span>
          </td>
        </tr>
      </tbody>
    </table>
    <b-list-group>
      <b-list-group-item variant="info"
        >Cantidad total de alumnos permitidos: {{ totales.cupos }} alumnos
      </b-list-group-item>
      <b-list-group-item variant="primary"
        >Cantidad de alumnos inscritos:
        {{ totales.inscritos }} alumnos</b-list-group-item
      >
      <b-list-group-item variant="secondary"
        >Cantidad total de cupos restantes:
        {{ totales.cupos - totales.inscritos }}
      </b-list-group-item>
      <b-list-group-item variant="success"
        >Cantidad de cursos terminados:
        {{ totales.ct }} cursos</b-list-group-item
      >
      <b-list-group-item variant="danger"
        >Cantidad de cursos activos: {{ totales.ca }} cursos</b-list-group-item
      >
      <b-list-group-item variant="warning"
        >Cantidad total de cursos:
        {{ totales.ca + totales.ct }} cursos</b-list-group-item
      >
    </b-list-group>
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
    totales() {
      let inscritos = 0;
      let cupos = 0;
      let ct = 0;
      let ca = 0;

      for (let i = 0; i < this.cursos.length; i++) {
        inscritos += this.cursos[i].inscritos;
        cupos += this.cursos[i].cupos;
        if (this.cursos[i].estado) {
          ct++;
        } else {
          ca++;
        }
      }
      return { inscritos, cupos, ct, ca };
    },
    totalpermitidos() {
      let inscritos = 0;
      for (let i = 0; i < this.cursos.length; i++) {
        inscritos += this.cursos[i].inscritos;
      }
      return inscritos;
    },
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
