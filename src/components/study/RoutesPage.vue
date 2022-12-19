<!-- <template>
  <div class="container">
    <h4>{{ reservedTitle }}</h4>
    <h4>공급대가 : {{ price }}</h4>
    <input type="number" v-model="price" />
    <h4>공급가액 {{ supplyAmount.toFixed() }}</h4>
    <h4>부가가치세 {{ valueAddedTax.toFixed() }}</h4>
  </div>
</template>

<script>
export default {
  name: "RoutesPage",
  data() {
    return {
      title: "캡틴 마블",
      price: 1000,
    };
  },
  computed: {
    reservedTitle: function () {
      return this.title.split("").reverse().join("");
    },
    supplyAmount: function () {
      return (this.price / 11) * 10;
    },
    valueAddedTax: function () {
      return this.price / 11;
    },
  },
};
</script>

<style scoped>
.container {
  height: 100%;
}
</style> -->

<template>
  <div class="container">
    {{ message }}
    <button @click="changeMessage">메시지를 바꾸기</button>
    <button @click="destroyInstance">뷰 Instance destroy</button>
  </div>
</template>
<script>
export default {
  name: "RoutesPage",
  props: {
    test: String,
  },
  data() {
    return {
      message: "test Message",
    };
  },
  methods: {
    changeMessage() {
      this.message = "Happy NewYear";
    },
  },
  computed: {},
  watch: {},

  // destroyed() {},
};
</script>

<style scoped>
.container {
  height: 100%;
}

.render-box {
  width: 50%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: pink;
}
</style>
