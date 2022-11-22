import TodoPage from "./components/study/TodoPage.vue";
import RoutesPage from "./components/study/RoutesPage.vue";
import { createWebHistory, createRouter } from "vue-router";
//
const routes = [
  {
    path: "/vuejs_practice",
    component: TodoPage,
    children: [{ path: "routes", name: "routesPage", component: RoutesPage }],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
