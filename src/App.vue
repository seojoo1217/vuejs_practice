<template>
  <!-- <DefaultContainer /> -->
  <div class="pa-container">
    <ShoppingPageVue />
  </div>
</template>

<script>
//import DefaultContainer from "./components/DefaultContainer.vue";
import ShoppingPageVue from "./components/shopping/page/ShoppingPage.vue";
//
export default {
  name: "App",
  components: {
    // DefaultContainer,
    ShoppingPageVue,
  },
};
</script>

<style>
html,
body {
  margin: 0px;
  padding: 0px;
  width: 100%;
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}

.pa-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
