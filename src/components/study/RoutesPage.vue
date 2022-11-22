<template>
  <div class="container">
    <div></div>
  </div>
</template>

<script>
export default {
  name: "RoutesPage",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  height: 100%;
  background: rgb(100, 100, 100);
}

.header {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 3rem;
  background: pink;
}
</style>
