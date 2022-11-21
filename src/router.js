import MainPage from "./components/page/MainPage.vue";
import AboutPage from "./components/page/AboutPage.vue";
import InfoPage from "./components/page/InfoPage.vue";
import RoutesPage from "./components/study/RoutesPage.vue";
import { createWebHistory, createRouter } from "vue-router";

const routes = [
  { path: "/main", name: "main routes", component: MainPage },
  { path: "/about", name: "about routes", component: AboutPage },
  { path: "/info", name: "info routes", component: InfoPage },
  {
    path: "/study",
    component: MainPage,
    children: [{ path: "routes", name: "routesPage", component: RoutesPage }],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
