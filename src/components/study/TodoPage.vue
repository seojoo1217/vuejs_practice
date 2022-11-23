<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";

function getTodoList() {
  const store = useStore();
  const list = computed(() => store.state.TODO.list);
  //const getter = computed(() => store.getters["todoList"]);
  return {
    list: list,
  };
}

export default {
  name: "RoutesPage",
  props: {
    msg: String,
  },
  setup() {
    return {
      ...getTodoList(),
    };
  },
  data() {
    return {
      itemArr: [{ title: "test" }],
      newtodo: "",
      currentClick: "",
    };
  },
  methods: {
    addItem() {
      // let length = this.itemArr.length;
      // if (this.newtodo.length === 0) {
      //   alert("작성된 문구가 없습니다.");
      //   return false;
      // }
      // dispatch;
      // this.itemArr.push({ title: this.newtodo });
      this.$store.commit("TODO/addItem", this.newtodo);
      this.newtodo = "";
    },
    cancel(param) {
      // let filterArr = this.itemArr.filter((item, index) => index !== param);
      // console.log(filterArr);
      // this.itemArr = filterArr;
      this.$store.commit("TODO/removeItem", param);
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="todo-container">
      <div class="header">TODO LIST</div>
      <div class="list-container">
        <div v-for="(item, index) in list" :key="index">
          <div class="list-item">
            <span class="cancel" @click="cancel(index)">X</span>
            <input type="text" :value="item.title" />
          </div>
        </div>
        <div v-if="itemArr.length === 0" class="nodata">데이터가 없습니다.</div>
      </div>
      <div class="footer">
        <input
          type="text"
          placeholder="입력하세요."
          v-model="newtodo"
          @keyup.enter="addItem"
        />
        <button @click="addItem">Add</button>
      </div>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
}

.nodata {
  color: rgba(0, 0, 0, 0.651);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer {
  display: flex;
  gap: 20px;
  padding: 10px;
}

.list-item {
  height: 30px;
  background: rgb(121, 121, 121);
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 20px;
  padding: 5px 10px;
  text-overflow: ellipsis;
  white-space: pre;
  color: white;
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
  border-radius: 10px;
  background: white;
}

input[type="text"] {
  width: 80%;
  outline: none;
  padding: 10px;
  border-radius: 3px;
  border: 1px solid rgb(173, 173, 173);
}
button {
  cursor: pointer;
  outline: none;
  border: none;
  width: 100px;
  border-radius: 20px;
  background: rgb(128, 183, 255);
}

.todo-container {
  width: 100%;
  max-width: 30rem;
  height: 20rem;
  padding: 0px 20px;
  background: rgb(104, 104, 104);
  display: flex;
  flex-direction: column;
  border-radius: 10px;
}

.header {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 10px;
}
</style>
