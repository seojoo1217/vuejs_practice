<script> 

export default {
  name: 'DefaultContainer',
  props: {
    msg: String
  },
  data(){
    return {
      indexArray :[
      {title:'1. vue.js state학습'} 
      ,{title:'2. vue.js state학습'} 

      ]
    }
  }
}
</script>

<template>
  <div class="container">
    <div class="header">
      <div>vue.js 학습</div>
      <div class="menu"> 
        <router-link to="/home"><div>HOME</div></router-link>
        <router-link to="/about">ABOUT</router-link> 
        <router-link to="/info">INFO</router-link> 
      </div>
     
    </div> 
    <div class="sidebar">
        <div v-for="(category, index) in indexArray" :key="index">
          <div>{{category.title}}</div> 
        
        </div>
       
      </div>



  <router-view></router-view>
  </div>
</template>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  width : 100%;
  height : 100% ;
} 
.sidebar{
  float : left;
  height : 100%;
  padding : 10px 20px;
}
.menu{
  display: flex;
  gap : 30px;

}
.header{
  background: pink;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;

}
</style>
