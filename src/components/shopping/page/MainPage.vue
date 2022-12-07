<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
import StyledCardVue from "../components/StyledCard.vue";

function getProductList() {
  const store = useStore();
  const list = computed(() => store.state.SHOPPING2.shopList);

  return {
    shopList: list,
  };
}

export default {
  name: "ShoppingPage",
  components: {
    "styled-card": StyledCardVue,
  },
  props: {
    msg: String,
  },
  setup() {
    return {
      ...getProductList(),
    };
  },
  data() {
    return {
      categoryList: [
        { id: "sale", code: "SALE", name: "SALE" },
        { id: "shirt", code: "C", name: "SHIRT" },
        { id: "pants", code: "P", name: "PANTS" },
        { id: "Acc", code: "A", name: "ACC" },
        { id: "shoes", code: "S", name: "SHOES" },
      ],
      currentSelectId: "SALE",
    };
  },
  methods: {
    selectItem(param) {
      this.currentSelectId = param;
      console.log(param);
    },
    movePage(param) {
      this.$store.commit("SHOPPING2/setCurrentId", param);
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
    <div class="ad">
      <div class="arrow left">&lt;</div>
      <div class="ad-view"></div>
      <div class="arrow right">&gt;</div>
    </div>
    <div class="sale">
      <div class="left-menu">
        <div
          class="item"
          :class="{ active: category.code === currentSelectId }"
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
          v-bind:src="shop.imageSrc"
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

  display: flex;
  justify-content: space-between;
  align-items: center;
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
  background: rgb(255 154 51);
  height: 100%;
  display: flex;
  padding: 20px;
}

.arrow {
  min-width: 100px;
  font-size: 30px;
  font-weight: 600;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f7f7f740;
  user-select: none;
  cursor: pointer;
}
.ad-view {
  flex: 1;
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
.active {
  background: #444444;
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
