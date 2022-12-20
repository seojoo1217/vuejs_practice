<template>
  <div class="footer">
    <input
      type="text"
      placeholder="입력하세요."
      v-bind:value="form.text"
      @change="
        $emit('update-form', { name: 'text', value: $event.target.value })
      "
      @keyup.enter="$emit('add-item')"
    />
    <input
      type="date"
      v-bind:value="form.date"
      @change="
        $emit('update-form', { name: 'date', value: $event.target.value })
      "
    />
    <button @click="$emit('add-item')">Add</button>
  </div>
</template>

<script>
export default {
  name: "todo-footer",
  props: ["form"],
};
</script>

<style scoped>
.footer {
  display: flex;
  gap: 20px;
  padding: 10px;
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
</style>
