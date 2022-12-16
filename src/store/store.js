import { createStore } from "vuex";
import TODO from "./modules/todolist";
import SHOPPING from "./modules/shopping";
//import SHOPPING2 from "./modules/shop2";

export default createStore({
  modules: { TODO, SHOPPING },
});
