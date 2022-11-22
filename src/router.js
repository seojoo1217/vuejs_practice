import MainPage from "./components/page/MainPage.vue";
import TodoPage from "./components/study/TodoPage.vue";
import RoutesPage from "./components/study/RoutesPage.vue";
import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    component: MainPage,
    children: [
      { path: "todo", name: "todoPage", component: TodoPage },
      { path: "routes", name: "routesPage", component: RoutesPage },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
