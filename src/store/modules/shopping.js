const state = {
  productList: [
    { key: "A", cnt: 0, title: "자켓", price: 1400 },
    { key: "B", cnt: 0, title: "바지", price: 3200 },
    { key: "C", cnt: 0, title: "옷", price: 1500 },
    { key: "D", cnt: 0, title: "스웨터", price: 2000 },
    { key: "E", cnt: 0, title: "니트", price: 2000 },
    { key: "F", cnt: 0, title: "목폴라", price: 2000 },
  ],
  basketList: [],
};
//
const getters = {
  productList: (state) => {
    return state.productList;
  },
};
//test
const actions = {
  //공개적 처리 혹은 복잡한 처리를 행할 때 public한 method
  addList({ commit }, name) {
    commit("TODO", name);
  },
};

const mutations = {
  //상태 변경시 전역 상태 update 해주는 setter
  addBasket(state, selectList) {
    state.basketList = selectList;
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
