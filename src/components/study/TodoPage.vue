<script>
import StyledListItem from "../shopping/components/StyledListItem.vue";
import StyledModal from "../shopping/components/StyledModal.vue";

export default {
  name: "todo-page",
  components: {
    "styled-item": StyledListItem,
    "styled-modal": StyledModal,
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
      let filterArr = this.todoList.filter((item) => item.id !== id);
      this.todoList = filterArr;
    },
    updateItem({ id, key, value }) {
      const findIndex = this.todoList.findIndex((item) => item.id === id);
      const updateItem = { ...this.todoList[findIndex], [key]: value };
      this.todoList[findIndex] = updateItem;
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

        // if (item.checked) {
        //   checkItem++;

        // }

        let type =
          item_date < today_date
            ? "past"
            : item_date === today_date
            ? "current"
            : "future";

        jsonArray[type].push(item);
      });

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
    // statusInfo: function () {
    //   let comp = 0;
    //   let notyet = 0;
    //   console.log("statusInfo", this.todoList);
    //   Object.keys(this.todoList).forEach((item) => {
    //     item.checked ? comp++ : notyet++;
    //   });
    //   return {
    //     comp,
    //     notyet,
    //   };
    // },
    computedText: function () {
      console.log(this.updateMessage);
      return "test";
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
      <div class="header">
        <div class="title">TODO LIST</div>
        <div class="status">완료 : {{ compItems }} / 미완료 : {{}}</div>
      </div>
      <div class="list-container">
        <div v-for="(type, index) in Object.keys(sortList)" :key="index">
          <div class="type-bar">
            {{
              type === "past" ? "과거" : type === "current" ? "오늘" : "미래"
            }}
            <!-- 
              
             -->
          </div>
          <styled-item
            v-for="(item, item_index) in sortList[type]"
            :key="item_index"
            v-bind:item="item"
            @update-item="updateItem"
            @delete-item="delItem"
          />
        </div>
      </div>
      <div class="footer">
        <input
          type="text"
          placeholder="입력하세요."
          v-model="form.text"
          @keyup.enter="addItem"
        />
        <input type="date" v-model="form.date" />
        <button @click="addItem">Add</button>
      </div>
    </div>
    <styled-modal
      @click-button="handleClick"
      v-bind:isOpen="false"
      title="삭제하시겠습니까?"
    >
      해당 item을 <b>삭제</b>하시겠습니까?
    </styled-modal>
  </div>
</template>

<style scoped>
input[type="checkbox"] {
  width: 25px;
  height: 25px;
}

.type-bar {
  width: 100%;
  color: white;
  background-color: #2e2d2d;
  padding: 2px 0px;
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

.list-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-content: center;
  gap: 10px;
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
  background: #2e2d2d;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding: 10px;
}
.status {
  color: white;
  font-size: 3px;
}
</style>
