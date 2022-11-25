import { createStore } from "vuex";
import TODO from "./modules/todolist";
import SHOPPING from "./modules/shopping";
export default createStore({
  modules: { TODO, SHOPPING },
});
