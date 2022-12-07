<template>
  <div class="container">
    <div class="filter">인기순 | 등록순 | 조회순</div>
    <div class="list">
      <styled-card
        v-for="(item, index) in shopList"
        :key="index"
        v-bind:name="item.name"
        v-bind:src="item.imageSrc"
        @click="movePage(item.id)"
      >
      </styled-card>
    </div>
    <div class="paging">Paging</div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import StyledCard from "../components/StyledCard.vue";

function getProductList() {
  let store = useStore();
  const list = computed(() => store.state.SHOPPING2.shopList);

  return {
    shopList: list,
  };
}
export default {
  name: "ListPage",
  components: {
    "styled-card": StyledCard,
  },
  setup() {
    return {
      ...getProductList(),
    };
  },
  methods: {
    movePage(param) {
      this.$store.commit("SHOPPING2/setCurrentId", param);
      this.$router.push("/vuejs_practice/detail/" + param);
    },
  },
  computed: {},
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
}

.filter {
  background: gray;
  width: 100%;
}
.list {
  flex: 1;
  flex-wrap: wrap;
  max-height: 42rem;
  overflow: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 3px;
}
</style>
