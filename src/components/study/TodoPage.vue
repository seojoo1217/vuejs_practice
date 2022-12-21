<script>
import StyledModal from "../shopping/components/StyledModal.vue";
import Contents from "./components/Contents.vue";
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";

export default {
  name: "todo-page",
  components: {
    "styled-modal": StyledModal,
    "todo-header": Header,
    "todo-contents": Contents,
    "todo-footer": Footer,
  },
  data() {
    return {
      todoList: [],
      form: {
        id: "",
        text: "",
        date: "",
        checked: false,
      },
      isOpen: false,
      id: "",
    };
  },
  methods: {
    changeText() {
      this.updateMessage = "안녕";
    },

    //TODO: store적용하여 state 관리해보기
    addItem() {
      if (this.form.text.length === 0) {
        alert("작성된 문구가 없습니다.");
        return false;
      }
      if (this.form.date.length === 0) {
        alert("등록된 날짜가 없습니다.");
        return false;
      }
      const id = new Date().getTime();
      this.todoList.push({
        title: this.form.text,
        date: this.form.date,
        checked: false,
        id,
      });
      this.form.text = "";
    },
    delItem({ id }) {
      this.isOpen = true;
      this.id = id;
    },
    updateItem({ id, key, value }) {
      console.log(id, key, value);
      const findIndex = this.todoList.findIndex((item) => item.id === id);
      const updateItem = { ...this.todoList[findIndex], [key]: value };
      this.todoList[findIndex] = updateItem;
    },
    updateFormItem({ name, value }) {
      this.form[name] = value;
    },
    handleClick() {
      this.isOpen = false;
      let filterArr = this.todoList.filter((item) => item.id !== this.id);
      this.todoList = filterArr;
    },
  },
  computed: {
    separateList: function () {
      const jsonArray = {
        past: [],
        current: [],
        future: [],
      };
      //   let checkItem = 0;
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const today_date = today.getTime();

      this.todoList.forEach((item) => {
        const date = new Date(item.date);
        date.setHours(0, 0, 0, 0);
        const item_date = date.getTime();

        let type =
          item_date < today_date
            ? "past"
            : item_date === today_date
            ? "current"
            : "future";

        jsonArray[type].push(item);
      });

      console.log(this.todoList);
      return jsonArray;
    },
    sortList: function () {
      Object.keys(this.separateList).forEach((type) => {
        this.separateList[type].sort(
          (a, b) => new Date(a.date) - new Date(b.date)
        );
      });
      return this.separateList;
    },
  },
  watch: {
    todoList: {
      handler(newVal, oldVal) {
        console.log("function 변화", newVal, oldVal);
      },
      deep: true,
    },
    updateMessage(newVal, oldVal) {
      console.log(newVal, oldVal);
      this.newMessage = "변경O";
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="todo-container">
      <todo-header title="TODO LIST" :todolist="todoList"></todo-header>
      <todo-contents
        @update-item="updateItem"
        @delete-item="delItem"
        :sortList="sortList"
      ></todo-contents>
      <todo-footer
        :form="form"
        @add-item="addItem"
        @update-form="updateFormItem"
      ></todo-footer>
    </div>
    <styled-modal
      @click-button="handleClick"
      v-bind:isOpen="isOpen"
      title="삭제하시겠습니까?"
    >
      해당 item을 삭제 하시겠습니까?
    </styled-modal>
  </div>
</template>

<style scoped>
input[type="checkbox"] {
  width: 25px;
  height: 25px;
}

.nodata {
  color: rgba(0, 0, 0, 0.651);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.todo-container {
  width: 100%;
  max-width: 30rem;
  min-height: 20rem;
  padding: 0px 20px;
  background: #2e2d2d;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
}
</style>
