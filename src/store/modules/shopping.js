const state = {
  productList: [
    { key: "A", title: "자켓", price: 1400 },
    { key: "B", title: "바지", price: 3200 },
    { key: "C", title: "옷", price: 1500 },
    { key: "D", title: "스웨터", price: 2000 },
    { key: "E", title: "니트", price: 2000 },
    { key: "F", title: "목폴라", price: 2000 },
  ],
  basket: [],
};

const getters = {
  productList: (state) => {
    return state.productList;
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
    state.productList.push({ title: todoItem, checked: false });
  },
  removeItem(state, param) {
    let resultList = state.list.filter((item, index) => index !== param);
    state.list = resultList;
  },
  updateItem(state, param) {
    let index = state.list.findIndex((item, index) => index === param.index);
    state.list[index][param.key] = param.value;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
