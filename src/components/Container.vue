<template>
  <el-container>
    <el-header>
      <el-menu :default-active="activePage" mode="horizontal" @select="handleSelect">
        <el-menu-item index="initialize">Initialize</el-menu-item>
        <el-menu-item index="play">Play</el-menu-item>
      </el-menu>
    </el-header>
    <el-main>
      <component :is="activeView"></component>
    </el-main>
  </el-container>
</template>
<script>
import Commands from "@/commands";
import InitializeView from "./InitializeView";
import PlayView from "./PlayView";

export default {
  components: {
    InitializeView,
    PlayView
  },
  computed: {
    activePage() {
      return this.$store.state.activePage;
    },
    activeView() {
      switch (this.activePage) {
        case "initialize":
          return "InitializeView";
        case "play":
          return "PlayView";
      }
    }
  },
  methods: {
    handleSelect(key) {
      this.$store.dispatch(Commands.changeActivePage, key);
    }
  }
};
</script>

