<script>
import Header from "../common/Header.vue";
import Footer from "../common/Footer.vue";
import Contents from "../common/Contents.vue";

export default {
  components: {
    "shop-header": Header,
    "shop-footer": Footer,
    "shop-body": Contents,
  },
  name: "ShoppingPage",
  props: {
    msg: String,
  },
  data() {},
};
</script>

<template>
  <div class="container">
    <shop-header></shop-header>
    <shop-body></shop-body>
    <shop-footer></shop-footer>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  max-width: 1280px;

  display: flex;
  flex-direction: column;
}
</style>
