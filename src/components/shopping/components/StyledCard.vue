<template>
  <div class="card-container">
    <img v-bind:src="src" loading="lazy" />
    {{ name }}
  </div>
</template>

<script>
export default {
  name: "StyledCard",
  props: ["name", "type", "src"],
};
</script>

<style scoped>
.card-container {
  width: 200px;
  height: 198px;
  border-radius: 10px;
  box-shadow: #efefef 3px 3px 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
  padding: 10px;

  display: flex;
  flex-direction: column;
}
.card-container:hover {
  background: rgba(236, 236, 236, 0.596);
}

img {
  width: 100%;
}
</style>
