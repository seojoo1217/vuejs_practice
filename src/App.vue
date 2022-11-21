<template>
   <DefaultContainer msg="Welcome to Your Vue.js App"/>
 

</template>

<script>
import DefaultContainer from './components/DefaultContainer.vue'

export default {
  name: 'App',
  components: {
    DefaultContainer
  }
}
</script>

<style>
html body{
  margin : 0px;
  padding : 0px;
  width : 100%;
  height : 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 }
</style>
