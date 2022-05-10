<template>
  <div>
    <tr>
      <th>Codigo /</th>
      <th>Costo /</th>
      <th>Cupos /</th>
      <th>Descripción /</th>
      <th>Duración /</th>
      <th>Estado /</th>
      <th>Imagen /</th>
      <th>inscritos /</th>
      <th>Nombre /</th>
      <th>Que deseas hacer /</th>
    </tr>
    <tr v-for="(curso, i) in list" :key="i">
      <td>{{ curso.costo }}</td>
      <td>{{ curso.cupos }}</td>
      <td>{{ curso.descripcion }}</td>
      <td>{{ curso.duracion }}</td>
      <td>{{ curso.estado ? "Verdadero" : "Falso" }}</td>
      <td><img width="40px" :src="curso.imagen" :alt="curso.nombre" /></td>
      <td>{{ curso.inscritos }}</td>
      <td>{{ curso.nombre }}</td>
      <td>{{ curso.id }}</td>
      <td>
        <span @click="linkeditcurso(curso.codigo)" class="fotmat-icon">🛠</span>
      </td>
    </tr>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "TablaCursos",
  props: {
    list: {
      type: Array,
      default: () => [],
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.fotmat-icon {
  font-size: 2rem;
  color: #ff0000;
  cursor: pointer;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
