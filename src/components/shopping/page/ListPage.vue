<template>
  <div>LISTPAGE</div>
</template>

<script>
export default {
  name: "ListPage",
  components: {},
  methods: {},
  computed: {},
};
</script>

<style scoped>
.detail-page {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
}

.radio-box {
  display: flex;
}

.detail-container {
  display: flex;
  height: 300px;
  padding: 20px;
}
.product-box {
  flex-shrink: 0;
  flex-basis: 400px;
}
.product-box > img {
  width: 100%;
  height: 100%;
}
.intro-box {
  flex: 9;
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
}
.item {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid lightgray;
  padding: 10px;
  gap: 10px;
}

#name {
  flex-basis: 80px;
  flex-shrink: 0;
  font-weight: 600;
}
#value {
  flex: 1;
  flex-shrink: 0;
  display: flex;
  gap: 10px;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
}
.intro {
}
</style>
