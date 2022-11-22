<script>
export default {
  name: "RoutesPage",
  props: {
    msg: String,
  },
  data() {
    return {
      itemArr: [],
      newtodo: "",
      currentClick: "",
    };
  },
  methods: {
    addItem() {
      // let length = this.itemArr.length;
      if (this.newtodo.length === 0) {
        alert("작성된 문구가 없습니다.");
        return false;
      }
      this.itemArr.push({ title: this.newtodo });
      this.newtodo = "";
    },
    cancel(param) {
      let filterArr = this.itemArr.filter((item, index) => index !== param);
      console.log(filterArr);
      this.itemArr = filterArr;
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="todo-container">
      <div class="list-container">
        <div v-for="(item, index) in itemArr" :key="index">
          <div class="list-item">
            <span class="cancel" @click="cancel(index)">X</span>
            {{ item.title }}
          </div>
        </div>
        <div v-if="itemArr.length === 0" class="nodata">데이터가 없습니다.</div>
      </div>
      <div class="footer">
        <input type="text" placeholder="입력하세요." v-model="newtodo" />
        <button @click="addItem">Add</button>
      </div>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  padding: 3rem;
  display: flex;
  justify-content: center;
  align-content: center;
}

.nodata {
  color: white;
}

.footer {
  padding: 10px;
}

.list-item {
  height: 30px;
  background: white;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 20px;
  width: 80%;
  padding: 0 10px;
  text-overflow: ellipsis;
  white-space: pre;
}

.cancel {
  gap: 20px;
  cursor: pointer;
}

.list-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-content: center;
  padding: 10px;
  gap: 10px;
  overflow: auto;
  background: rgba(35, 35, 63, 0.267);
}

input[type="text"] {
  width: 80%;
  outline: none;
  padding: 3px;
  border-radius: 3px;
  border: 1px solid rgb(173, 173, 173);
}
button {
  cursor: pointer;
  outline: none;
  border: none;
  width: 100px;
  height: 20px;
  border-radius: 20px;
  background: rgb(128, 183, 255);
}

.todo-container {
  width: 100%;
  max-width: 50rem;
  height: 20rem;
  padding: 10px;
  background: rgb(104, 104, 104);
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
