import { createRouter, createWebHashHistory } from "vue-router";
import controlRouter from "../modules/control/router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../modules/website/layouts/PortfolioLayout.vue"
      ),
  },
  {
    path: "/proyectos",
    name: "proyectos",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../modules/projects/layouts/ProjectsLayout.vue"
      ),
  },

  {
    path: "/control",
    ...controlRouter,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
