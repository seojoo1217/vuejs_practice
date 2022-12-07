<template>
  <div class="detail-page">
    <div class="detail-container">
      <div class="product-box">
        <img v-bind:src="detailPage.imageSrc" alt="noImage" />
      </div>
      <div class="intro-box">
        <div class="item">
          <div id="name">상품 이름</div>
          <div id="value">{{ detailPage?.name }}</div>
        </div>
        <div class="item">
          <div id="name">설명</div>
          <div id="value">상품 설명</div>
        </div>
        <div class="item">
          <div id="name">옵션</div>
          <div id="value">
            <div
              class="radio-box"
              v-for="(info, index) in detailPage.info.color"
              :key="index"
            >
              <input :id="index" name="color" type="radio" />
              <label :for="index" name="color">{{ info }}</label>
            </div>
          </div>
        </div>
        <div class="item">
          <div id="name">가격</div>
          <div id="value">
            {{ Number(detailPage?.info.price).toLocaleString() }}원
          </div>
          <div id="name">잔여 수량</div>
          <div id="value">{{ detailPage?.info.cnt }}</div>
        </div>
        <div class="item">
          <div id="name">구매 수량</div>
          <div id="value">
            <input type="number" defaultValue="1" max="5" />
          </div>
        </div>
        <div class="item">
          <styled-button @click-button="handleClick">즉시구매</styled-button>
          <styled-button @click-button="handleClick">장바구니</styled-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import { computed } from "@vue/runtime-core";
import { mapGetters } from "vuex";
import StyledButton from "../components/StyledButton.vue";

// async function getDetailPage() {
//   const store = useStore();
//   const list = await computed(() => store.state.SHOPPING2.shopList);
//   console.log(list);
//   const detailObj = await list?.find(
//     (item) => item.id === this.$route.query.id
//   );
//   console.log(detailObj);

//   return {
//     detail: detailObj,
//   };
// }
export default {
  name: "product-detail",
  components: {
    "styled-button": StyledButton, //Styled button 컴포넌트 생성
  },
  methods: {
    handleClick() {
      console.log("handleClick");
    },
  },
  computed: {
    ...mapGetters({ detailPage: "SHOPPING2/detailData" }),
  },
};
</script>

<style scoped>
.detail-page {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
}

.radio-box {
  display: flex;
}

.detail-container {
  display: flex;
  height: 300px;
  padding: 20px;
}
.product-box {
  flex-shrink: 0;
  flex-basis: 400px;
}
.product-box > img {
  width: 100%;
  height: 100%;
}
.intro-box {
  flex: 9;
  display: flex;
  flex-direction: column;
  padding: 1rem;
}
.item {
  display: flex;
  justify-content: center;
  align-content: center;
  border: 1px solid lightgray;
  padding: 10px;
  gap: 10px;
}

#name {
  flex-basis: 80px;
  flex-shrink: 0;
  font-weight: 600;
}
#value {
  flex: 1;
  flex-shrink: 0;
  display: flex;
  gap: 10px;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
}
.intro {
}
</style>
