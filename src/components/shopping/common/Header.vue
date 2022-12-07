<template>
  <div class="header">
    <div class="logo item" @click="handleMove()">SHOPPING</div>
    <div class="menu">
      <div class="item">SALE</div>
      <div class="item">Clothes</div>
      <div class="item">Pants</div>
      <div class="item">ACC</div>
      <div class="item">Shoes</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "shop-footer",
  props: {
    type: String,
    name: String,
  },
  methods: {
    handleMove() {
      this.$router.push("/vuejs_practice/main");
    },
  },
};
</script>

<style scoped>
.header {
  max-height: 50px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  border-bottom: 1px solid lightgray;
}

.logo {
  width: 100px;
}
.menu {
  gap: 20px;
  display: flex;
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
