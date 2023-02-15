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
      component: () => import("../views/ContainerPatternView.vue"),
    },
    {
      path: "/provide-inject-pattern",
      name: "ProvideInjectPatternView",
      component: () => import("../views/ProvideInjectPatternView.vue"),
    },
  ],
});

export default router;
