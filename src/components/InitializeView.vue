<template>
  <div>
    <el-form label-width="100px">
      <el-form-item label="Players">
        <el-input-number v-model="playersCount" :min="1" :max="6"></el-input-number>
      </el-form-item>
      <el-form-item label="Initial amount">
        <el-input-number v-model="initialAmount" :min="1000" :max="10000"></el-input-number>
      </el-form-item>
      <el-form-item>
        <el-button @click="initialize" type="primary">Start</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import Commands from "@/commands";

export default {
  computed: {
    playersCount: {
      get() {
        return this.$store.state.playersCount;
      },
      set(value) {
        this.$store.dispatch(Commands.setPlayersCount, value);
      }
    },
    initialAmount: {
      get() {
        return this.$store.state.initialAmount;
      },
      set(value) {
        this.$store.dispatch(Commands.setInitialAmount, value);
      }
    }
  },
  methods: {
    initialize() {
      this.$store.dispatch(Commands.initialize);
    }
  }
};
</script>
