import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/upload",
    },
    {
      path: "/upload",
      name: "Upload",
      component: () => import("@/pages/Upload/index.vue"),
    },
    {
      path: "/explain",
      name: "Explain",
      component: () => import("@/pages/Explain/index.vue"),
    },
    {
      path: "/similar",
      name: "Similar",
      component: () => import("@/pages/Similar/index.vue"),
    },
    {
      path: "/analytics",
      name: "Analytics",
      component: () => import("@/pages/Analytics/index.vue"),
    },
  ],
});

export default router;
