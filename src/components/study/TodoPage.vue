<script>
export default {
  name: "RoutesPage",
  props: {
    msg: String,
  },
  data() {
    return {
      itemArr: [],
    };
  },
  methods: {
    addItem(e) {
      this.itemArr.push({ title: e.target.value });
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="todo-container">
      <div class="list-container">
        <div v-for="(item, index) in itemArr" :key="index">
          <div class="list-item">{{ item.title }}</div>
        </div>
      </div>
      <div class="footer">
        <input type="text" placeholder="입력하세요." />
        <button @click="addItem">Add</button>
      </div>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  height: 100%;
  padding: 3rem;
  display: flex;
  justify-content: center;
  align-content: center;
}

.footer {
  padding: 10px;
}

.list-container {
  width: 100%;
  flex: 1;
  background: rgba(35, 35, 63, 0.267);
}

input[type="text"] {
  width: 80%;
  outline: none;
  padding: 3px;
  border-radius: 3px;
  border: 1px solid rgb(173, 173, 173);
}

.todo-container {
  width: 100%;
  max-width: 50rem;
  height: 20rem;
  padding: 3px 10px;
  background: skyblue;
  display: flex;
  flex-direction: column;
}

.header {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 3rem;
  background: rgb(29, 29, 29);
  color: white;
}
</style>
