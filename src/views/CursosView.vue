<template>
  <div>
    <h2>h2 cursos</h2>
    <div>
      <TablaCursos :list="cursos" />
    </div>
  </div>
</template>

<script>
import TablaCursos from "@/components/TablaCursos.vue";
import { mapState } from "vuex";

/* import { mapActions, mapState } from "vuex";
 */
export default {
  name: "CursesView",
  components: {
    TablaCursos,
  },
  computed: {
    ...mapState(["cursos"]),
  },
};
</script>

<style></style>
