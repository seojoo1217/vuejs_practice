import TodoPage from "./components/study/todolist/TodoPage.vue";
import RoutesPage from "./components/study/RoutesPage.vue";
import WatchPage from "./components/study/WatchPage.vue";
import BodyPage from "./components/page/BodyPage.vue";

import { createWebHistory, createRouter } from "vue-router";
import MainPage from "./components/shopping/page/MainPage.vue";
// import ContentsPage from "./components/shopping/common/Contents.vue";
import DetailPage from "./components/shopping/page/ProductDetailPage.vue";
import ListPage from "./components/shopping/page/ListPage.vue";
import BasketPage from "./components/shopping/page/BasketPage.vue";
// //
import ShoppingPage from "./components/shopping/page/ShoppingPage.vue";

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
  {
    path: "/vuejs_practice/mall",
    component: ShoppingPage,
    children: [
      { path: "", name: "mainPage", component: MainPage },
      {
        path: "detail/:id",
        name: "detailPage",
        component: DetailPage,
      },
      {
        path: "list/:id",
        name: "listPage",
        component: ListPage,
      },
      {
        path: "basket",
        name: "basketPage",
        component: BasketPage,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
