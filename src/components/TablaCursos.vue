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
    </tr>
    <tr v-for="(curso, i) in list" :key="i">
      <td>{{ curso.codigo }}</td>
      <td>{{ curso.costo }}</td>
      <td>{{ curso.cupos }}</td>
      <td>{{ curso.descripcion }}</td>
      <td>{{ curso.duracion }}</td>
      <td>{{ curso.estado }}</td>
      <td><img width="40px" :src="curso.imagen" :alt="curso.nombre" /></td>
      <td>{{ curso.inscritos }}</td>
      <td>{{ curso.nombre }}</td>
    </tr>
  </div>
</template>

<script>
export default {
  name: "TablaCursos",
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
