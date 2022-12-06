<template>
  <div class="container">Footer</div>
</template>

<script>
export default {
  name: "shop-footer",
  props: {
    type: String,
    name: String,
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  max-height: 50px;
  background-color: black;
}
</style>
