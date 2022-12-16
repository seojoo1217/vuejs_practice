<template>
  <div class="list-item">
    <div>
      <input
        type="date"
        :value="data.date"
        @change="
          $emit('update-item', {
            id: data.id,
            key: 'date',
            value: $event.target.value,
          })
        "
      />
    </div>
    <input
      type="text"
      :value="data.title"
      @change="
        $emit('update-item', {
          id: data.id,
          key: 'title',
          value: $event.target.value,
        })
      "
    />
    <input type="checkbox" :checked="data.checked" />
    <span class="cancel" @click="$emit('delete-item', { id: data.id })">X</span>
  </div>
</template>

<script>
export default {
  name: "list-item",
  props: ["data"],
};
</script>

<style scoped>
.list-item {
  height: 30px;
  background: #3e3e3e;
  border-bottom: 1px solid gray;
  display: flex;
  align-items: center;
  justify-content: space-around;
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
</style>
