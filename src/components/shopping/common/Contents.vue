<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: "shop-contents",
  props: {
    type: String,
    name: String,
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  padding: 10px 0px;
}
</style>
