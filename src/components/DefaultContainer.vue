<script>
export default {
  name: "DefaultContainer",
  props: {
    msg: String,
  },
  data() {
    return {
      indexArray: [
        { path: "/todo", title: "TODOLIST" },
        { path: "/instance", title: "Vue Instance" },
        { path: "/components", title: "Vue Components" },
        { path: "/routes", title: "Vue Routes" },
        { path: "/template", title: "Vue Template" },
        { path: "/loader", title: "Vue Loader" },
        { path: "/cli", title: "Vue CLI" },
        { path: "/file", title: "Single File Component" },
      ],
    };
  },
};
</script>

<template>
  <div class="container">
    <div class="header">
      <router-link to="/main">Vue.js 학습</router-link>
      <div class="menu">
        <!-- <router-link to="/home">HOME</router-link>
        <router-link to="/about">ABOUT</router-link>
        <router-link to="/info">INFO</router-link> -->
      </div>
    </div>
    <div class="second-container">
      <div class="sidebar">
        <div v-for="(category, index) in indexArray" :key="index">
          <router-link v-bind:to="category.path">
            <div class="side-item">{{ category.title }}</div>
          </router-link>
        </div>
      </div>
      <div class="view">
        <div class="header">
          {{ indexArray.find((item) => item.path === $route.path)?.title }}
        </div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.view {
  width: 100%;
}
.container {
  width: 100%;
  height: 100%;
}
.sidebar {
  width: 100%;
  max-width: 13rem;
  text-align: left;
  display: flex;
  flex-direction: column;
  height: 100%;
  background: #bdbdbd;
  border-right: 1px solid white;
}
.side-item {
  font-size: 1rem;
  padding: 10px;
  background: #252525;
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
}
</style>
