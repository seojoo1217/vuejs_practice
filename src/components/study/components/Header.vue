<template>
  <div class="header">
    <div class="title">{{ title }}</div>
    <div class="status">
      <span class="green"> 완료 : {{ complete }} </span>
      /
      <span class="red"> 미완료 : {{ todolist.length - complete }} </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "shop-footer",
  props: ["title", "todolist"],
  data() {
    return {
      complete: 0,
    };
  },
  watch: {
    todolist: {
      handler(currentArr) {
        let cnt = 0;
        for (const item of currentArr) {
          if (item.checked) cnt++;
        }
        this.complete = cnt;
      },
      deep: true,
    },
  },
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding: 10px;
}

.green {
  color: lightgreen;
}
.red {
  color: orange;
}

.status {
  color: white;
  font-size: 3px;
}
</style>
