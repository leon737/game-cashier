<template>
  <el-row align="middle" type="flex">
    <el-col :md="4" :sm="6" :xs="6" class="player-name">
      <span v-if="wallet.id != -1">Player {{wallet.id + 1}}</span>
      <span v-else>Bank</span>
    </el-col>
    <el-col v-if="wallet.id != -1" :md="4" :sm="6" :xs="8">
        <span :class="playerAmountClassName">
            {{wallet.amount}}
        </span>
    </el-col>
    <el-col
      :md="{ span:4, offset: wallet.id == -1 ? 4 : 0 }"
      :sm="{ span:4, offset: wallet.id == -1 ? 6 : 0 }"
      :xs="{ span:4, offset: wallet.id == -1 ? 8 : 0 }"
    >
      <el-button
        :type="getToBtnType(wallet.id)"
        icon="el-icon-plus"
        circle
        :disabled="isToBtnDisabled(wallet.id)"
        @click="setTo(wallet.id)"
      ></el-button>
    </el-col>
    <el-col :md="2" :sm="4" :xs="4">
      <el-button
        :type="getFromBtnType(wallet.id)"
        icon="el-icon-minus"
        circle
        :disabled="isFromBtnDisabled(wallet.id)"
        @click="setFrom(wallet.id)"
      ></el-button>
    </el-col>
  </el-row>
</template>
<script>
import Commands from "@/commands";

export default {
  props: {
    id: Number
  },
  computed: {
    wallet() {
      if (this.id != -1) {
        return this.$store.state.playersWallets[this.id];
      }
      return {
        id: -1
      };
    },
    playerAmountClassName() {
        if (this.id != -1) { 
            return this.$store.state.playersWallets[this.id].amount >=0 ? 'positive' : 'negative';
        }
    }
  },
  methods: {
    getFromBtnType(id) {
      return this.$store.state.from == id ? "success" : "primary";
    },
    getToBtnType(id) {
      return this.$store.state.to == id ? "success" : "primary";
    },
    isFromBtnDisabled(id) {
      return this.$store.state.to == id;
    },
    isToBtnDisabled(id) {
      return this.$store.state.from == id;
    },
    setFrom(id) {
      this.$store.dispatch(Commands.setFrom, id);
    },
    setTo(id) {
      this.$store.dispatch(Commands.setTo, id);
    }
  }
};
</script>
<style lang="stylus" scoped>
.player-name {
  font-weight: bold;
}
.positive {
    color: green;
}
.negative {
    color: red;
}
</style>
