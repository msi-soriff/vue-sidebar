import { createRouter, createWebHistory } from "vue-router";
import Home from "../viwes/Home.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/about",
      component: () => import("../viwes/About.vue"),
    },
  ],
});
export default router;
