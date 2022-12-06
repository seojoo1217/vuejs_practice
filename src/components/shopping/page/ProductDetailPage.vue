<template>
  <div>
    <div class="intro">
      <div>
        <img src="test" alt="noImage" />
        <styled-button></styled-button>
      </div>
    </div>
  </div>
</template>

<script>
import StyledButton from "../components/StyledButton.vue";
export default {
  name: "product-detail",
  components: {
    "styled-button": StyledButton,
  },
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
}
.intro {
  border: 1px solid red;
}
</style>
