<template>
  <div>
    <h1>{{ title }}</h1>
    <div class="container border flex-row">
      <ProjectCard
        v-for="item in listings"
        :key="`${item.name}`"
        :listing="item"
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
    title: String,
    listings: Array,
  },
  components: { ProjectCard },
});
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
