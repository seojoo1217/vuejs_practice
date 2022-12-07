<template>
  <div class="header">
    <div class="logo item" @click="handleMove()">서주의 쇼핑몰</div>
    <div class="menu">
      <div
        class="item"
        @click="handleMove()"
        :class="{ active: undefined === $route.params.id }"
      >
        Main
      </div>
      <div
        class="item"
        v-for="(category, index) in categoryList"
        :key="index"
        @click="movePage(category.id)"
        :class="{ active: String(category.id).includes($route.params.id) }"
      >
        {{ category.name }}
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
function getCategoryList() {
  const store = useStore();
  const list = computed(() => store.state.SHOPPING2.categoryList);

  return {
    categoryList: list,
  };
}

export default {
  name: "shop-footer",
  props: {
    type: String,
    name: String,
  },
  setup() {
    return {
      ...getCategoryList(),
    };
  },
  methods: {
    handleMove() {
      console.log(this.$route.params.id);
      this.$router.push("/vuejs_practice/");
    },
    movePage(param) {
      this.$router.push("/vuejs_practice/list/" + param);
    },
  },
};
</script>

<style scoped>
.header {
  min-height: 50px;
  max-height: 50px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  border-bottom: 1px solid lightgray;
}

.logo {
  width: 140px;
}
.menu {
  gap: 20px;
  display: flex;
}
.active {
  color: green;
  font-weight: 600;
}

.item {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  min-width: 50px;
}
.item:hover {
  color: green;
  font-weight: 600;
}
</style>
