<template>
  <div class="list-item">
    <div>
      <input
        type="date"
        :value="item.date"
        @change="
          $emit('update-item', {
            id: item.id,
            key: 'date',
            value: $event.target.value,
          })
        "
      />
    </div>
    <input
      type="text"
      :value="item.title"
      @change="
        $emit('update-item', {
          id: item.id,
          key: 'title',
          value: $event.target.value,
        })
      "
    />
    <input
      type="checkbox"
      :checked="item.checked"
      @change="
        $emit('update-item', {
          id: item.id,
          key: 'checked',
          value: $event.target.checked,
        })
      "
    />
    <span class="cancel" @click="$emit('delete-item', { id: item.id })">X</span>
  </div>
</template>

<script>
export default {
  name: "list-item",
  props: ["item"],
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
