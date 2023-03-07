import { createWebHistory, createRouter } from "vue-router";
import MainPage from "./components/shopping/page/MainPage.vue";
import DetailPage from "./components/shopping/page/ProductDetailPage.vue";
import ListPage from "./components/shopping/page/ListPage.vue";
import BasketPage from "./components/shopping/page/BasketPage.vue";
// //
import ShoppingPage from "./components/shopping/page/ShoppingPage.vue";

const routes = [
  {
    path: "/",
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
