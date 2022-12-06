<template>
  <button></button>
</template>

<script>
export default {
  name: "Button",
  props: {
    type: String,
    name: String,
  },
};
</script>

<style>
button {
  outline: none;
}
</style>
