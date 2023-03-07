<script>
import BodyPage from "./page/BodyPage.vue";
// import ShoppingPageVue from "./shopping/page/ShoppingPage.vue";

const path = "/";

export default {
  components: { BodyPage },
  name: "DefaultContainer",
  props: {
    msg: String,
  },
  data() {
    return {
      indexArray: [{ path: path, title: "쇼핑몰 예제" }],
    };
  },
};
</script>

<template>
  <div class="container">
    <div class="header">
      <router-link to="/">Vue.js 학습</router-link>
      <div class="menu"></div>
    </div>
    <div class="second-container">
      <div class="sidebar">
        <div v-for="(category, index) in indexArray" :key="index">
          <router-link v-bind:to="category.path">
            <div
              class="side-item"
              :class="{ active: category.path === $route.path }"
            >
              {{ category.title }}
            </div>
          </router-link>
        </div>
      </div>
      <div class="view">
        <div class="header">
          {{ indexArray.find((item) => item.path === $route.path)?.title }}
        </div>
        <div class="container">
          <BodyPage />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.view {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.container {
  height: 100%;
}
.sidebar {
  width: 100%;
  max-width: 13rem;
  text-align: left;
  display: flex;
  flex-direction: column;
  height: 100%;
  background: #252525;

  border-right: 1px solid white;
}
.side-item {
  font-size: 1rem;
  padding: 10px;
  background: #252525;
}

.active {
  font-size: 1rem;
  padding: 10px;
  background: #000000;
}

.side-item:hover {
  cursor: pointer;
  color: white;
  background-color: #111010;
}

a {
  text-decoration: none;
  color: white;
}

.second-container {
  width: 100%;
  height: 100%;
  display: flex;
}

.menu {
  display: flex;
  gap: 30px;
}
.header {
  background: #252525;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  color: white;
  border-bottom: 1px solid white;
  height: 10%;
  max-height: 20px;
}
</style>
