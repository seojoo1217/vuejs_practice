// import TodoPage from "./components/study/TodoPage.vue";
// import RoutesPage from "./components/study/RoutesPage.vue";
// import WatchPage from "./components/study/WatchPage.vue";
// import BodyPage from "./components/page/BodyPage.vue";

///
import ContentsPage from "./components/shopping/common/Contents.vue";
import MainPage from "./components/shopping/page/MainPage.vue";
import { createWebHistory, createRouter } from "vue-router";
import DetailPage from "./components/shopping/page/ProductDetailPage.vue";
import ListPage from "./components/shopping/page/ListPage.vue";

//
const routes = [
  {
    path: "/vuejs_practice",
    component: ContentsPage,
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
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;

// {
//   path: "/vuejs_practice",
//   component: BodyPage,
//   children: [
//     { path: "", name: "todoPage", component: TodoPage },
//     { path: "routes", name: "routesPage", component: RoutesPage },
//     { path: "watch", name: "watchPage", component: WatchPage },
//   ],
// },
