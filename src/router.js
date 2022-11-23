import TodoPage from "./components/study/TodoPage.vue";
import RoutesPage from "./components/study/RoutesPage.vue";
import WatchPage from "./components/study/WatchPage.vue";
import BodyPage from "./components/page/BodyPage.vue";

import { createWebHistory, createRouter } from "vue-router";
//
const routes = [
  {
    path: "/vuejs_practice",
    component: BodyPage,
    children: [
      { path: "", name: "todoPage", component: TodoPage },
      { path: "routes", name: "routesPage", component: RoutesPage },
      { path: "watch", name: "watchPage", component: WatchPage },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
