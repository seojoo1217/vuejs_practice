<script>
export default {
  name: "WatchPage",
  data() {
    return {
      author: {
        name: "John",
        books: ["VUE-1", "VUE-2", "VUE-3"],
      },
    };
  },
  methods: {
    publishedBooksMethod() {
      return "method";
    },
  },
  computed: {
    publishedBooksMessage() {
      return this.author.books.length > 0 ? "YES" : "NO";
    },
  },
};
</script>

<template>
  <div>
    computed/watch 두 방법의 접근방식은 서로 동일하다
    <br />
    computed = 의존하는 값이 변하는 경우 계속 실행 &nbsp; <br />
    함수가 실행된다 <br />
    method = 값이 렌더링 된 값으로 유지 하고 싶으면 method
    <br />
    computed = 계속 캐싱하여 값을 바꿔 보여주고 싶을땐 computed
  </div>

  Computed = {{ publishedBooksMessage }}
  {{ author.books }}
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
