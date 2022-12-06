<template>
  <button>test</button>
</template>

<script>
export default {
  name: "styled-button",
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
