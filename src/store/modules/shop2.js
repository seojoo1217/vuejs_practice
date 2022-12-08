const state = {
  shopList: [
    {
      id: "shop1",
      imageSrc: "https://picsum.photos/id/1/5000/3333",
      code: "C",
      name: "2022 옷",
      info: {
        price: 30000,
        color: ["pink", "blue"],
        cnt: 300,
      },
    },
    {
      id: "shop2",
      imageSrc: "https://picsum.photos/id/2/5000/3333",
      code: "C",
      name: "2022 옷1",
      info: {
        price: 60000,
        color: ["red", "green"],
        cnt: 22,
      },
    },
    {
      id: "shop3",
      imageSrc: "https://picsum.photos/id/3/5000/3333",
      code: "C",
      name: "2022 옷2",
      info: {
        price: 6555,
        color: ["pink", "green"],
        cnt: 233,
      },
    },
    {
      id: "shop4",
      imageSrc: "https://picsum.photos/id/4/5000/3333",
      code: "C",
      name: "2022 옷3",
      info: {
        price: 6555,
        color: ["pink", "green"],
        cnt: 233,
      },
    },
    {
      id: "shop5",
      imageSrc: "https://picsum.photos/id/5/5000/3333",
      code: "P",
      name: "2022 바지",
      info: {
        price: 6555,
        color: ["pink", "green"],
        cnt: 233,
      },
    },
    {
      id: "shop6",
      imageSrc: "https://picsum.photos/id/6/5000/3333",
      code: "P",
      name: "2022 바지1",
      info: {
        price: 6555,
        color: ["pink", "green"],
        cnt: 233,
      },
    },
    {
      id: "shop7",
      imageSrc: "https://picsum.photos/id/7/5000/3333",
      code: "P",
      name: "2022 바지2",
      info: {
        price: 6555,
        color: ["pink", "green"],
        cnt: 233,
      },
    },
    {
      id: "shop8",
      imageSrc: "https://picsum.photos/id/8/5000/3333",
      code: "P",
      name: "2022 바지3",
      info: {
        price: 6555,
        color: ["pink", "green"],
        cnt: 233,
      },
    },
    {
      id: "shop9",
      imageSrc: "https://picsum.photos/id/9/5000/3333",
      code: "S",
      name: "2022 신발",
      info: {
        price: 6555,
        color: ["pink", "green"],
        cnt: 233,
      },
    },
    {
      id: "shop10",
      imageSrc: "https://picsum.photos/id/10/5000/3333",
      code: "S",
      name: "2022 신발1",
      info: {
        price: 6555,
        color: ["pink", "green"],
        cnt: 233,
      },
    },
    {
      id: "shop11",
      imageSrc: "https://picsum.photos/id/11/5000/3333",
      code: "S",
      name: "2022 신발2",
      info: {
        price: 6555,
        color: ["pink", "green"],
        cnt: 233,
      },
    },
    {
      id: "shop12",
      imageSrc: "https://picsum.photos/id/12/5000/3333",
      code: "S",
      name: "2022 신발3",
      info: {
        price: 6555,
        color: ["pink", "green"],
        cnt: 233,
      },
    },
    {
      id: "shop13",
      imageSrc: "https://picsum.photos/id/13/5000/3333",
      code: "A",
      name: "2022 악세사리",
      info: {
        price: 6555,
        color: ["pink", "green"],
        cnt: 233,
      },
    },
    {
      id: "shop14",
      imageSrc: "https://picsum.photos/id/14/5000/3333",
      code: "A",
      name: "2022 악세사리1",
      info: {
        price: 6555,
        color: ["pink", "green"],
        cnt: 233,
      },
    },
    {
      id: "shop15",
      imageSrc: "https://picsum.photos/id/15/5000/3333",
      code: "A",
      name: "2022 악세사리2",
      info: {
        price: 6555,
        color: ["pink", "green"],
        cnt: 233,
      },
    },
    {
      id: "shop16",
      imageSrc: "https://picsum.photos/id/16/5000/3333",
      code: "A",
      name: "2022 악세사리3",
      info: {
        price: 6555,
        color: ["pink", "green"],
        cnt: 233,
      },
    },
    {
      id: "shop17",
      imageSrc: "https://picsum.photos/id/17/5000/3333",
      code: "SALE",
      name: "SALE 2022 1",
      info: {
        price: 6555,
        color: ["pink", "green"],
        cnt: 233,
      },
    },
    {
      id: "shop18",
      imageSrc: "https://picsum.photos/id/18/5000/3333",
      code: "SALE",
      name: "SALE 2022 2",
      info: {
        price: 6555,
        color: ["pink", "green"],
        cnt: 233,
      },
    },
    {
      id: "shop19",
      imageSrc: "https://picsum.photos/id/19/5000/3333",
      code: "SALE",
      name: "SALE 2022 3",
      info: {
        price: 6555,
        color: ["pink", "green", "blue"],
        cnt: 233,
      },
    },
    {
      id: "shop20",
      imageSrc: "https://picsum.photos/id/20/5000/3333",
      code: "SALE",
      name: "SALE 2022 4",
      info: {
        price: 6555,
        color: ["pink", "green"],
        cnt: 233,
      },
    },
    {
      id: "shop21",
      imageSrc: "https://picsum.photos/id/21/5000/3333",
      code: "SALE",
      name: "SALE 2022 5",
      info: {
        price: 6555,
        color: ["pink", "red"],
        cnt: 233,
      },
    },
    {
      id: "shop22",
      imageSrc: "https://picsum.photos/id/22/5000/3333",
      code: "SALE",
      name: "SALE 2022 6",
      info: {
        price: 6555,
        color: ["pink", "red"],
        cnt: 233,
      },
    },
  ],
  categoryList: [
    { id: "sale", code: "SALE", name: "SALE" },
    { id: "shirt", code: "C", name: "SHIRT" },
    { id: "pants", code: "P", name: "PANTS" },
    { id: "Acc", code: "A", name: "ACC" },
    { id: "shoes", code: "S", name: "SHOES" },
  ],
  currentId: "",
  detailPage: {},
  basketList: [],
  paymentList: [],
};

const getters = {
  detailData: (state) => {
    const { currentId, shopList } = state;
    const detailPage = shopList?.find((item) => item.id === currentId);
    return detailPage;
  },
  getBasketList: (state) => {
    return state.basketList;
  },
};

const mutations = {
  //상태 변경시 전역 상태 update 해주는 setter
  setCurrentId(state, payload) {
    state.currentId = payload;
  },
  addBasketList(state, payload) {
    const findItem = state.shopList.find((item) => item.id === payload.id);
    console.log(payload.color);
    let data = {
      ...findItem,
      color: payload.color,
    };
    state.basketList.push(data);
  },
};

const actions = {
  addList({ commit }, name) {
    commit("TODO", name);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
