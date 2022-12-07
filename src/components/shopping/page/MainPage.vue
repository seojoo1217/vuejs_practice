<script>
import StyledCardVue from "../components/StyledCard.vue";
export default {
  name: "ShoppingPage",
  components: {
    "styled-card": StyledCardVue,
  },
  props: {
    msg: String,
  },
  data() {
    return {
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
      currentSelectId: "sale",
    };
  },
  methods: {
    selectItem(param) {
      this.currentSelectId = param;
      console.log(param);
    },
    movePage(param) {
      this.$router.push("/vuejs_practice/detail/" + param);
    },
  },
  computed: {
    filterShopItem: function () {
      return this.shopList.filter((shop) => shop.code === this.currentSelectId);
    },
  },
};
</script>

<template>
  <div class="container">
    <!-- 광고 -->
    <div class="ad"></div>
    <div class="sale">
      <div class="left-menu">
        <div
          class="item"
          v-for="(category, index) in categoryList"
          :key="index"
          @click="selectItem(category.code)"
        >
          {{ category.name }}
        </div>
      </div>
      <div class="sale-view">
        <styled-card
          v-for="(shop, index) in filterShopItem"
          :key="index"
          v-bind:type="1"
          v-bind:name="shop.name"
          @click="movePage(shop.id)"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
}
.ad {
  background: rgb(139, 139, 139);
  height: 20rem;
}

.left-menu {
  display: flex;
  flex-direction: column;
}
.item-box {
  border: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
}

.sale {
  background: rgb(197, 237, 255);
  height: 100%;
  display: flex;
  padding: 20px;
}

.item {
  width: 100px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
  cursor: pointer;
  color: white;
}
.sale-view {
  background: white;
  width: 100%;
  display: flex;
  gap: 10px;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 10px;
}
</style>
