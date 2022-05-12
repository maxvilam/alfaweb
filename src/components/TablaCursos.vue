<template>
  <div>
    <b-card-group>
      <b-card
        v-for="(curso, i) in list"
        :key="i"
        :img-src="curso.imagen"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 25rem"
        class="mx-auto bb-4"
      >
        <h2>{{ curso.nombre }}</h2>
        <b-card-text class="text-left"> Información </b-card-text>
        <b-card-text>Costo: {{ curso.costo }} </b-card-text>
        <b-card-text> Duración: {{ curso.duracion }} </b-card-text>
        <b-card-text>Cupos: {{ curso.cupos }}</b-card-text>
        <b-card-text>
          Completado: {{ curso.estado ? "Sí" : "No" }}
        </b-card-text>
        <b-card-text>
          Fecha de registro: {{ dia }}/{{ mes }}/{{ anno }}</b-card-text
        >
        <b-card-text> Descripción: {{ curso.descripcion }} </b-card-text>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "TablaCursos",
  data() {
    return {
      mes: new Date().getMonth() + 1,
      dia: new Date().getDate(),
      anno: new Date().getFullYear(),
    };
  },
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
