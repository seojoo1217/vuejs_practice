<template>
  <div class="container">
    <div class="list-container">
      <div class="item" v-for="(item, index) in basketList" :key="index">
        <div class="image">
          <img :src="item.imageSrc" alt="noImage" />
        </div>
        {{ item.name }}
        <div class="right">색상 : {{ item.color }}</div>
        <div>{{ Number(item.info.price).toLocaleString() }}원</div>
        <div class="right">
          <div><input type="checkbox" /></div>
          <div>X</div>
        </div>
      </div>
    </div>
    <div class="total-area">
      <div class="price">
        가격
        {{ Number(getTotalPrice).toLocaleString() }}
        원
      </div>
      <styled-button>결제</styled-button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import StyledButton from "../components/StyledButton.vue";
export default {
  name: "basket-page",
  components: {
    "styled-button": StyledButton,
  },
  computed: {
    ...mapGetters({ basketList: "SHOPPING2/getBasketList" }),
    getTotalPrice() {
      let sum = 0;
      this.basketList.map((item) => (sum += item.info.price));
      return sum;
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  padding: 5rem 0 0 0px;
}

.total-area {
  background: #002236;
  color: white;
  padding: 2rem 10px;

  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

.list-container {
  display: flex;
  flex-direction: column;
  padding: 10px 25px 30px 10px;
  gap: 10px;
  height: 100%;
  align-items: center;
}
.image {
  flex-shrink: 0;
  flex-basis: 200px;
  height: 100%;
}
.image > img {
  width: 100%;
  height: 100%;
}
.item {
  height: 150px;
  display: flex;
  gap: 10px;
  align-items: center;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: #efefef 3px 3px 3px;
  width: 60rem;
  justify-content: space-between;
}

.right {
  display: flex;
  flex-direction: column;
  padding: 10px;
}
</style>
