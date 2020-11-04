<template>
  <div>
    <h1>RPG Tools</h1>
    <div class="container border flex-row">
      <ProjectCard
        v-for="proj in rpgtools"
        :key="`${proj.name}`"
        :listing="proj"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectCard from "@/components/ProjectCard.vue";

export default Vue.extend({
  name: "RPGTools",
  props: {
    rpgtools: Object,
  },
  components: { ProjectCard },
});
</script>

<style scoped>
.container {
  display: flex;
}
</style>
