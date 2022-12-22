<template>
  <div class="list-container">
    <div v-for="(type, index) in Object.keys(sortList)" :key="index">
      <div class="type-bar">
        {{ type === "past" ? "과거" : type === "current" ? "오늘" : "미래" }}
      </div>
      <styled-item
        v-for="(item, item_index) in sortList[type]"
        :key="item_index"
        v-bind:item="item"
        @update-item="updateMethod"
        @delete-item="deleteMethod"
      />
    </div>
  </div>
</template>

<script>
import StyledListItem from "@/components/shopping/components/StyledListItem.vue";

export default {
  name: "shop-contents",
  props: ["sortList"],
  components: {
    "styled-item": StyledListItem,
  },
  methods: {
    updateMethod(param) {
      this.$emit("update-item", param);
    },
    deleteMethod(param) {
      this.$emit("delete-item", param);
    },
  },
};
</script>

<style scoped>
.list-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-content: center;
  gap: 10px;
  background: white;
}

.type-bar {
  width: 100%;
  color: white;
  background-color: #2e2d2d;
  padding: 2px 0px;
}
</style>
