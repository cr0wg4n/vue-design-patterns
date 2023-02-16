import { createRouter, createWebHistory } from "vue-router";
import BuilderPatternView from "../views/BuilderPatternView.vue";
import StoreManagmentPatternView from "../views/StoreManagmentPatternView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: BuilderPatternView,
    },
    {
      path: "/builder-pattern",
      name: "BuilderPattern",
      component: () => import("../views/BuilderPatternView.vue"),
    },
    {
      path: "/container-pattern",
      name: "ContainerPattern",
      component: () => import("../views/ContainerPatternView.vue"),
    },
    {
      path: "/provide-inject-pattern",
      name: "ProvideInjectPattern",
      component: () => import("../views/ProvideInjectPatternView.vue"),
    },
    {
      path: "/composable-pattern",
      name: "ComposablePattern",
      component: () => import("../views/ComposablePatternView.vue"),
    },
    {
      path: "/store-management-pattern",
      name: "StoreManagmentPattern",
      component: () => import("../views/StoreManagmentPatternView.vue"),
    },
  ],
});

export default router;
