<template>
  <div>
    <el-row>
      <player-entry
        v-for="playerWallet in playersWallets"
        :key="playerWallet.id"
        :id="playerWallet.id"
      ></player-entry>
      <player-entry :id="-1"></player-entry>
    </el-row>
    <el-row>
      <el-col :md="8" :sm="8" :xs="16">
        <el-input-number v-model="amount" :min="0" :max="50000"></el-input-number>
      </el-col>
      <el-col :md="6" :sm="6" :xs="8">
        <el-button type="primary" @click="transfer" :disabled="isTransferBtnDisabled">Transfer</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-button type="primary" @click="resetTransferAmount" icon="el-icon-refresh"></el-button>
        <el-button type="primary" @click="add(10)">+10</el-button>
        <el-button type="primary" @click="add(100)">+100</el-button>
        <el-button type="primary" @click="add(1000)">+1000</el-button>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Commands from "@/commands";
import PlayerEntry from "./PlayerEntry";

export default {
  components: {
    PlayerEntry
  },
  computed: {
    playersWallets() {
      return this.$store.state.playersWallets;
    },
    amount: {
      get() {
        return this.$store.state.transferAmount;
      },
      set(value) {
        this.$store.dispatch(Commands.setTransferAmount, value);
      }
    },
    isTransferBtnDisabled() {
      return (
        null === this.$store.state.from ||
        null === this.$store.state.to ||
        0 === this.$store.state.transferAmount
      );
    }
  },
  methods: {
    transfer() {
      this.$store.dispatch(Commands.transfer);
    },
    resetTransferAmount() {
      this.$store.dispatch(Commands.setTransferAmount, 0);
    },
    add(value) {
      this.$store.dispatch(Commands.addTransferAmount, value);
    }
  }
};
</script>
<style lang="stylus" scoped>
    .el-button + .el-button {
        margin-left: 2px;
    }
</style>



