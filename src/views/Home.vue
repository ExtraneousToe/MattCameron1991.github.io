<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <h3>
      Welcome to my user page!
    </h3>
    <div>
      I will be using this page as a front-facing repository for my personal
      portfolio and as a way to host any tools that I create for myself for use
      with D&D.
    </div>
    <br />
    <div>Feel free to peruse and use.</div>
    <div class="parent">
      <ProjectCard
        v-for="(proj, index) in projects"
        :key="index"
        :project="proj"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectCard from "@/components/ProjectCard.vue";

export default Vue.extend({
  name: "Home",
  props: ["projects"],
  components: {
    ProjectCard,
  },
});
</script>

<style scoped>
.parent {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
