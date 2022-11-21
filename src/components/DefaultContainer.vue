<script>
export default {
  name: "DefaultContainer",
  props: {
    msg: String,
  },
  data() {
    return {
      indexArray: [
        { path: "/study/intro", title: "Vue.js? /MVVM 패턴" },
        { path: "/study/instance", title: "Vue Instance" },
        { path: "/study/components", title: "Vue Components" },
        { path: "/study/routes", title: "Vue Routes" },
        { path: "/study/template", title: "Vue Template" },
        { path: "/study/loader", title: "Vue Loader" },
        { path: "/study/cli", title: "Vue CLI" },
        { path: "/study/file", title: "Single File Component" },
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
        <router-link to="/home">HOME</router-link>
        <router-link to="/about">ABOUT</router-link>
        <router-link to="/info">INFO</router-link>
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
      {{ $route.path }}

      <router-view></router-view>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.sidebar {
  width: 100%;
  max-width: 20rem;
  text-align: left;
  display: flex;
  flex-direction: column;
  height: 100%;
  background: #bdbdbd;
}
.side-item {
  font-size: 1.1rem;
  padding: 10px;
}

.side-item:hover {
  background: #252525;
  cursor: pointer;
  color: white;
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
