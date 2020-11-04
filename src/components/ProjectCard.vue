<template>
  <div class="flow-card">
    <div class="card-header">
      <h4>
        <a :href="listing.extLink" target="_blank" v-if="listing.extLink">{{
          listing.name
        }}</a>
        <div v-else>{{ listing.name }}</div>
      </h4>

      <div>
        <span>
          <strong>Status:</strong>
          {{ listing.status | parseStatus }}</span
        >
      </div>

      <div v-if="listing.repoLink && listing.repoLink.length > 0">
        <strong>Repo:</strong>&nbsp;
        <a :href="listing.repoLink" target="_blank">
          <!-- {{ listing.repoLink }} -->
          link
        </a>
      </div>
    </div>
    <div class="desc">
      <div>
        <p v-for="(para, index) in listing.description" :key="index">
          {{ para }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ProjectCard",
  props: {
    listing: Object,
  },
  filters: {
    parseStatus: function(status) {
      switch (status) {
        case "InDevelopment":
        case "In Development":
          return "In Development";
        default:
          return `[${status}]`;
      }
    },
  },
});
</script>

<style scoped>
.flow-card {
  border: 1px solid rgb(10, 10, 10);
  flex: 0 0 300px;
  margin: 10px;
  box-sizing: border-box;
  padding: 5px;
}

.card-header {
  text-align: left;
}

h4 {
  text-align: center;
}
</style>
