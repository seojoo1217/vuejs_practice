import { createStore } from "vuex";
import TODO from "./modules/todolist";

export default createStore({
  modules: { TODO },
});
