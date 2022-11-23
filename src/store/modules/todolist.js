const state = {
  list: [],
};

const getters = {
  todoList: (state) => {
    return state.list;
  },
};

const actions = {
  addList({ commit }, name) {
    commit("TODO", name);
  },
};

const mutations = {
  addItem(state, todoItem) {
    let resultList = state.list.push({ title: todoItem });
    return resultList;
  },
  removeItem(state, param) {
    let resultList = state.list.filter((item, index) => index !== param);
    return resultList;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
