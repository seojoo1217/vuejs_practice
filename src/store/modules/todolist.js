const state = {
  list: [],
};

const getters = {
  todoList: (state) => {
    return state.list;
  },
};

const actions = {
  //공개적 처리 혹은 복잡한 처리를 행할 때 public한 method
  addList({ commit }, name) {
    commit("TODO", name);
  },
};

const mutations = {
  //상태 변경시 전역 상태 update 해주는 setter
  addItem(state, todoItem) {
    state.list.push({ title: todoItem });
  },
  removeItem(state, param) {
    let resultList = state.list.filter((item, index) => index !== param);
    state.list = resultList;
  },
  updateItem(state, param) {
    let index = state.list.findIndex((item, index) => index === param.index);
    state.list[index].title = param.text;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
