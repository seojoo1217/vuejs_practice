<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
function getProductList() {
  const store = useStore();
  const list = computed(() => store.state.SHOPPING.productList);
  return {
    list: list,
  };
}
function getBasketList() {
  const store = useStore();
  const basketList = computed(() => store.state.SHOPPING.basketList);
  return {
    basketList: basketList,
  };
}
export default {
  name: "WatchPage",
  data() {
    return {
      selectList: [],
    };
  },
  setup() {
    return {
      ...getProductList(),
      ...getBasketList(),
    };
  },
  methods: {
    addBasket() {
      if (this.selectList.length === 0) {
        alert("체크된 항목이 없습니다.");
        return false;
      }
      this.$store.commit("SHOPPING/addBasket", this.selectList);
      this.newtodo = "";
    },
  },
  computed: {
    totalSum() {
      return this.basketList
        .map(({ price }) => price)
        .reduce((a, b) => a + b, 0);
    },
    allSelected: {
      //getter
      get: function () {
        return this.checkList.length === this.selectList.length;
      },
      //setter
      set: function (e) {
        this.selectList = e ? this.checkList : [];
      },
    },
  },
};
//
</script>

<template>
  <div class="container">
    <div class="header">vue.js 예제</div>
    <!-- <div class="info">
      computed/watch 두 방법의 접근방식은 서로 <b>동일</b>하다
      <br />
      computed = 의존하는 값이 변하는 경우 계속 실행 함수가 실행된다
      <br />
      <hr />
      method = 값이 렌더링 된 값으로 유지 하고 싶으면 method
      <br />
      computed = 계속 캐싱하여 값을 바꿔 보여주고 싶을땐 computed
    </div> -->
    <div class="body">
      <div class="box shopping">
        <div class="box-header">Shopping Component</div>
        <div class="box-body">
          <div v-for="(item, index) in list" :key="index">
            <div class="list-item">
              <div>
                {{ index + 1 }}
              </div>

              <div>
                {{ item.title }}
              </div>

              <div>
                <input
                  type="checkbox"
                  :id="item"
                  :value="item"
                  :key="index"
                  v-model="selectList"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="footer">
          <button @click="addBasket">Add Basket</button>
        </div>
      </div>
      <div class="box">
        <div class="box-header">Basket Component</div>
        <div class="box-body">
          <div v-for="(item, index) in basketList" :key="index">
            <div class="list-item">
              <div>
                {{ index + 1 }}
              </div>
              <div>
                {{ item.title }}
              </div>
              <div>
                {{ Number(item.price).toLocaleString() }}
              </div>
            </div>
          </div>
        </div>
        <div class="footer">
          <button>Payment</button>
          수량 {{ basketList.length }}
          <div>값 : {{ Number(totalSum).toLocaleString() }}</div>
        </div>
      </div>
      <div class="box">
        <div class="box-header">Payment Component</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
}
.info {
  width: 80%;
  padding: 20px;
  text-align: left;
}
.box {
  border: 1px solid rgb(173, 173, 173);
  height: 20rem;
  width: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
}
.box-body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 40px;
}
.box-header {
  background: #252525;
  padding: 10px 20px;
  color: white;
}
button {
  cursor: pointer;
  outline: none;
  border: none;
  width: 100px;
  border-radius: 20px;
  padding: 10px 20px;
  white-space: pre;
  background: rgb(128, 183, 255);
}
.footer {
  display: flex;
  justify-content: space-between;
  padding: 10px 30px;
  align-items: center;
  background: rgba(170, 170, 170, 0.377);
}
.body {
  padding: 20px;
  flex-wrap: wrap;

  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  width: 100%;
  height: 100%;
  gap: 20px;
}
.list-item {
  width: 100%;
  display: flex;
  flex: 1;
  justify-content: space-between;
}
</style>
