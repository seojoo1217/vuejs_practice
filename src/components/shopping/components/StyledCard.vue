<template>
  <div class="card-container">{{ name }}</div>
</template>

<script>
export default {
  name: "StyledCard",
  props: ["name", "type"],
};
</script>

<style>
.card-container {
  width: 200px;
  height: 198px;
  border-radius: 10px;
  box-shadow: #efefef 3px 3px 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
</style>
