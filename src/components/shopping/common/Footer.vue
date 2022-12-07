<template>
  <div class="container">CopyRight 2022. seojooLee all rights reserved</div>
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
  max-height: 50px;
  width: 100%;
  background-color: black;
  display: flex;
  color: lightgray;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 20px 0px;
}
</style>
