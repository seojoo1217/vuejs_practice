<template>
  <div class="dark-background" :class="{ isOpen: isOpen === true }">
    <div class="modal-container">
      <div class="title">{{ title }}</div>
      <slot> </slot>
      <div class="footer">
        <styled-button @click="$emit('click-button')">네</styled-button>
        <!-- <styled-button @click="$emit('click-button')">아니요</styled-button> -->
      </div>
    </div>
  </div>test
</template> 

<script>
import StyledButton from "./StyledButton.vue";

export default {
  name: "StyledModal",
  props: ["title", "isOpen"],
  components: {
    "styled-button": StyledButton,
  },
};
</script>

<style scoped>
.dark-background {
  position: fixed;
  z-index: 8;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #0000007a;
  display: flex;
  justify-content: center;
  align-items: center;
  display: none;
}

.modal-container {
  width: 400px;
  height: 200px;
  background: white;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.footer {
  display: flex;
  padding: 10px 0;
  justify-content: center;
  align-items: center;
}

.title {
  padding: 4px 0;
}
.isOpen {
  display: flex;
}
</style>
