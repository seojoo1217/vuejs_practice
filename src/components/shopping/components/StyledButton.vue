<template>
  <button @click="$emit('click-button')">
    <slot> </slot>
  </button>
</template>

<script>
export default {
  name: "StyledButton",
  props: ["title"],
};
</script>

<style scoped>
button {
  width: 100px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  background: rgb(255, 255, 255);
  border: 1px solid rgb(80, 141, 255);
  outline: none;
  cursor: pointer;
  border-radius: 3px;
}

button:hover {
  background: rgb(80, 141, 255);
  color: white;
  font-weight: 600;
}
</style>
