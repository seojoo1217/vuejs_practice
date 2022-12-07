const state = {
  shopList: [
    {
      id: "shop1",
      imageSrc: "https://picsum.photos/id/1/5000/3333",
      code: "C",
      name: "2022 옷",
    },
    {
      id: "shop2",
      imageSrc: "https://picsum.photos/id/2/5000/3333",
      code: "C",
      name: "2022 옷1",
    },
    {
      id: "shop3",
      imageSrc: "https://picsum.photos/id/3/5000/3333",
      code: "C",
      name: "2022 옷2",
    },
    {
      id: "shop4",
      imageSrc: "https://picsum.photos/id/4/5000/3333",
      code: "C",
      name: "2022 옷3",
    },
    {
      id: "shop5",
      imageSrc: "https://picsum.photos/id/5/5000/3333",
      code: "P",
      name: "2022 바지",
    },
    {
      id: "shop6",
      imageSrc: "https://picsum.photos/id/6/5000/3333",
      code: "P",
      name: "2022 바지1",
    },
    {
      id: "shop7",
      imageSrc: "https://picsum.photos/id/7/5000/3333",
      code: "P",
      name: "2022 바지2",
    },
    {
      id: "shop8",
      imageSrc: "https://picsum.photos/id/8/5000/3333",
      code: "P",
      name: "2022 바지3",
    },
    {
      id: "shop9",
      imageSrc: "https://picsum.photos/id/9/5000/3333",
      code: "S",
      name: "2022 신발",
    },
    {
      id: "shop10",
      imageSrc: "https://picsum.photos/id/10/5000/3333",
      code: "S",
      name: "2022 신발1",
    },
    {
      id: "shop11",
      imageSrc: "https://picsum.photos/id/11/5000/3333",
      code: "S",
      name: "2022 신발2",
    },
    {
      id: "shop12",
      imageSrc: "https://picsum.photos/id/12/5000/3333",
      code: "S",
      name: "2022 신발3",
    },
    {
      id: "shop13",
      imageSrc: "https://picsum.photos/id/13/5000/3333",
      code: "A",
      name: "2022 악세사리",
    },
    {
      id: "shop14",
      imageSrc: "https://picsum.photos/id/14/5000/3333",
      code: "A",
      name: "2022 악세사리1",
    },
    {
      id: "shop15",
      imageSrc: "https://picsum.photos/id/15/5000/3333",
      code: "A",
      name: "2022 악세사리2",
    },
    {
      id: "shop16",
      imageSrc: "https://picsum.photos/id/16/5000/3333",
      code: "A",
      name: "2022 악세사리3",
    },
    {
      id: "shop17",
      imageSrc: "https://picsum.photos/id/17/5000/3333",
      code: "SALE",
      name: "SALE 2022 1",
    },
    {
      id: "shop18",
      imageSrc: "https://picsum.photos/id/18/5000/3333",
      code: "SALE",
      name: "SALE 2022 2",
    },
    {
      id: "shop19",
      imageSrc: "https://picsum.photos/id/19/5000/3333",
      code: "SALE",
      name: "SALE 2022 3",
    },
    {
      id: "shop20",
      imageSrc: "https://picsum.photos/id/20/5000/3333",
      code: "SALE",
      name: "SALE 2022 4",
    },
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
