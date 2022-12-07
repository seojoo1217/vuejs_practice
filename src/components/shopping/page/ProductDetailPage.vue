<template>
  <div class="detail-page">
    <div class="detail-container">
      <div class="product-box">
        <img src="test" alt="noImage" />
      </div>
      <div class="intro-box">
        <div class="item">
          <div>상품 이름</div>
          <div>PRODUCT_NAME</div>
        </div>
        <div class="item">
          <div>설명</div>
          <div>상품 설명</div>
        </div>
        <div class="item">
          <div>옵션</div>
          <div>핑크</div>
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
import StyledButton from "../components/StyledButton.vue";
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
.detail-container {
  display: flex;
  height: 300px;
  padding: 20px;
}
.product-box {
  border: 1px solid red;
  flex-shrink: 0;
  flex-basis: 400px;
}
.intro-box {
  flex: 9;
  border: 1px solid pink;
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
}
.item > div {
  flex: 1;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
}
.intro {
  border: 1px solid red;
}
</style>
