<script>
export default {
  name: "FullName",
  props: ["firstName", "lastName"],
  data() {
    return {
      fullName: this.firstName + " " + this.lastName,
    };
  },
  watched: {
    firstName() {
      this.fullName = this.firstName + " " + this.lastName;
    },
    lastName() {
      this.fullName = this.firstName + " " + this.lastName;
    },
  },
};
</script>
