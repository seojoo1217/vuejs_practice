<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
function getProductList() {
  const store = useStore();
  const list = computed(() => store.state.SHOPPING.productList);
  //const getter = computed(() => store.getters["todoList"]);
  return {
    list: list,
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
    };
  },
  methods: {
    selectItem(indexVal) {
      let checkList = [];
      console.log(this.selectList.some((item) => item.key === indexVal.key));
      if (this.selectList.some((item) => item.key === indexVal.key)) {
        checkList = this.selectList.filter((item) => indexVal.key !== item.key);
        console.log(checkList);
      } else {
        checkList = this.selectList.push(indexVal);
      }
      return checkList;
    },
  },
  computed: {
    totalSum() {
      return this.selectList
        .map(({ price }) => price)
        .reduce((a, b) => a + b, 0);
    },
  },
};
//
</script>

<template>
  <div class="container">
    <div class="header">vue.js 예제</div>
    <div class="info">
      computed/watch 두 방법의 접근방식은 서로 <b>동일</b>하다
      <br />
      computed = 의존하는 값이 변하는 경우 계속 실행 함수가 실행된다
      <br />
      <hr />
      method = 값이 렌더링 된 값으로 유지 하고 싶으면 method
      <br />
      computed = 계속 캐싱하여 값을 바꿔 보여주고 싶을땐 computed
    </div>
    <div class="body">
      <div class="box shopping">
        <div class="header">쇼핑 리스트</div>
        <div class="box-body">
          <div v-for="(item, index) in list" :key="index">
            <div class="list-item">
              {{ index + 1 }} {{ item.title }}
              <input type="checkbox" @change="selectItem(item)" />
            </div>
          </div>
        </div>
        <div class="footer"><button>장바구니 담기</button></div>
      </div>
      <div class="box">
        <div class="header">장바구니</div>
        <div class="box-body">
          <div v-for="(item, index) in selectList" :key="index">
            <div class="list-item">
              <div>
                {{ index + 1 }}
              </div>
              <div>
                {{ item.title }}
              </div>
              <div>
                {{ String(item.price).toLocaleString() }}
              </div>
            </div>
          </div>
        </div>
        <div class="footer">
          <button>결제</button>
          <div>값 : {{ totalSum }}</div>
        </div>
      </div>
      <div class="box">
        <div class="header">결제하기</div>
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
  padding: 20px;
  border: 1px solid pink;
  height: 20rem;
  width: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.footer {
  display: flex;
}
.body {
  display: flex;
  flex: 1;
  width: 100%;
  height: 100%;
}
.list-item {
  width: 100%;
  display: flex;
  flex: 1;
  display: flex;
  justify-content: space-between;
}
</style>
