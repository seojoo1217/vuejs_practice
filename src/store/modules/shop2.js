//TODO:

const state = {
  shopList: [
    { id: "shop1", code: "C", name: "2022 옷" },
    { id: "shop2", code: "C", name: "2022 옷1" },
    { id: "shop3", code: "C", name: "2022 옷2" },
    { id: "shop4", code: "C", name: "2022 옷3" },
    { id: "shop5", code: "P", name: "2022 바지" },
    { id: "shop6", code: "P", name: "2022 바지1" },
    { id: "shop7", code: "P", name: "2022 바지2" },
    { id: "shop8", code: "P", name: "2022 바지3" },
    { id: "shop9", code: "S", name: "2022 신발" },
    { id: "shop10", code: "S", name: "2022 신발1" },
    { id: "shop11", code: "S", name: "2022 신발2" },
    { id: "shop12", code: "S", name: "2022 신발3" },
    { id: "shop13", code: "A", name: "2022 악세사리" },
    { id: "shop14", code: "A", name: "2022 악세사리1" },
    { id: "shop15", code: "A", name: "2022 악세사리2" },
    { id: "shop16", code: "A", name: "2022 악세사리3" },
  ],
  categoryList: [
    { id: "sale", code: "SALE", name: "SALE" },
    { id: "shirt", code: "C", name: "SHIRT" },
    { id: "pants", code: "P", name: "PANTS" },
    { id: "Acc", code: "A", name: "ACC" },
    { id: "shoes", code: "S", name: "SHOES" },
  ],
  detailPage: {},
  basketList: [],
  paymentList: [],
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
