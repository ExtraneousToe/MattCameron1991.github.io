import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import RPGTools from "@/views/RPGTools.vue";
import GenericProjectsPage from "@/views/GenericProjectsPage.vue";
import ProjectData from "../data/projects.json";

//const ProjectData = { projects: [] };
// GenericProjectsPage

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    props: {
      projects: ProjectData.projects
    }
  },
  {
    path: "/rpgtools",
    name: "RPG Tools",
    component: GenericProjectsPage,
    props: {
      title: "RPG Page",
      listings: ProjectData.rpgtools
    }
  },
  {
    path: "/projects",
    name: "Projects",
    component: GenericProjectsPage,
    props: {
      title: "Projects",
      listings: ProjectData.projects
    }
  },
  {
    path: "/games",
    name: "Games",
    component: GenericProjectsPage,
    props: {
      title: "Games",
      listings: ProjectData.games
    }
  },
  {
    path: "/applications",
    name: "Applications",
    component: GenericProjectsPage,
    props: {
      title: "Applications",
      listings: ProjectData.applications
    }
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
