<template>
  <div class="detail-page">
    <div class="detail-container">
      <div class="product-box">
        <img v-bind:src="detailPage.imageSrc" alt="noImage" />
      </div>

      <div class="intro-box">
        <div class="title">
          {{ detailPage?.name }}
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
            <input type="number" defaultValue="1" max="5" min="1" />
          </div>
        </div>
        <div class="item">
          <div id="name">배송</div>
          <div id="value">무료배송</div>
        </div>
        <div class="item">
          <styled-button>즉시구매</styled-button>
          <styled-button @click-button="handleClick(detailPage.id)"
            >장바구니</styled-button
          >
        </div>
      </div>
    </div>
    <div class="detail-box">
      DETAIL
      <div class="total">
        <!-- <img v-bind:src="detailPage.imageSrc" alt="noImage" /> -->
      </div>
    </div>
  </div>
  <styled-modal
    @click-button="handleClick"
    v-bind:isOpen="isModalOpen"
    title="장바구니"
  >
    장바구니에 담겼습니다. <br />
    장바구니로 이동하시겠습니까?
  </styled-modal>
</template>

<script>
//import { computed } from "@vue/runtime-core";
import { mapGetters } from "vuex";
import StyledButton from "../components/StyledButton.vue";
import StyledModal from "../components/StyledModal.vue";

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
  data() {
    return {
      isModalOpen: false,
    };
  },
  components: {
    "styled-button": StyledButton, //Styled button 컴포넌트 생성
    "styled-modal": StyledModal,
  },
  methods: {
    handleClick(id) {
      console.log("handleClick");
      this.isModalOpen = !this.isModalOpen;

      if (this.isModalOpen) {
        this.$store.commit("SHOPPING2/addBasketList", id);
      } else {
        this.$router.push({ name: "basketPage" });
      }
    },
    handleCloseModal() {
      // this.isMod
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
  flex-direction: column;

  height: 100%;
  width: 100%;
}

.detail-box {
  border: 1px solid red;
}

.radio-box {
  display: flex;
}

.detail-container {
  display: flex;
  height: 300px;
  padding: 20px;
  justify-content: center;
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
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  flex-basis: 400px;
}
.item {
  display: flex;
  justify-content: center;
  align-items: center;
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
.title {
  padding: 10px 0px;
}
</style>
