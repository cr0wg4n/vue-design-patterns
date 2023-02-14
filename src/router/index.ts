import { createRouter, createWebHistory } from "vue-router";
import BuilderPatternView from "../views/BuilderPatternView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "BuilderPattern",
      component: BuilderPatternView,
    },
    {
      path: "/container-pattern",
      name: "ContainerPattern",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/ContainerPatternView.vue"),
    },
  ],
});

export default router;
