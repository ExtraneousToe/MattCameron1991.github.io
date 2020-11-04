<template>
  <div>
    <h1>{{ title }}</h1>
    <b-container class="border flex-row">
      <b-row align-h="center" cols="3">
        <ProjectCard
          v-for="item in listings"
          :key="`${item.name}`"
          :listing="item"
        />
      </b-row>
    </b-container>
    <!-- <div>
      Hash:
      <div v-for="(key, idx) in keys" :key="key">
        {{ key }} ::
        {{
          typeof values[idx] === "string"
            ? values[idx]
            : Object.keys(values[idx])
        }}
      </div>
    </div> -->
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
    routeObj: Object,
  },
  components: { ProjectCard },
});
</script>

<style scoped></style>
