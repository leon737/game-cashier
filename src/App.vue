<template>
  <div id="app">
    <container></container>
  </div>
</template>

<script>
import Container from "@/components/Container";
import Commands from "@/commands";

export default {
  name: "app",
  components: {
    Container
  },
  created() {
    this.$store.dispatch(Commands.initialize);
  }
};
</script>
<style lang="stylus">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.el-row {
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }
}
</style>
