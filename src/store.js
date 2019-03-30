import Vue from 'vue'
import Vuex from 'vuex'
import Commands from './commands'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activePage: 'play',
    playersCount: 2,
    initialAmount: 5000,
    playersWallets: [],
    from: null,
    to: null,
    transferAmount: 0
  },
  mutations: {
    changeActivePage(state, payload) {
      state.activePage = payload;
    },
    setPlayersCount(state, payload) {
      state.playersCount = payload;
    },
    setInitialAmount(state, payload) {
      state.initialAmount = payload;
    },
    initializePlayersWallets(state) {
      state.playersWallets = [];
      for(let i = 0; i < state.playersCount; ++i)
        state.playersWallets.push({
          id: i,
          amount: state.initialAmount
        });
    },
    setFrom(state, payload) {
      state.from = payload;
    },
    setTo(state, payload) {
      state.to = payload;
    },
    setTransferAmount(state, payload) {
      state.transferAmount = payload;
    },
    addTransferAmount(state, payload) {
      state.transferAmount += payload;
    },
    transfer(state) {
      if (state.from != -1) {
        state.playersWallets[state.from].amount -= state.transferAmount;
      }
      if (state.to != -1) {
        state.playersWallets[state.to].amount += state.transferAmount;
      }
      state.from = null;
      state.to = null;
      state.transferAmount = 0;
    }
  },
  actions: {
    changeActivePage({commit}, payload) {
      commit(Commands.changeActivePage, payload);
    },
    setPlayersCount({commit}, payload) {
      commit(Commands.setPlayersCount, payload);
    },
    setInitialAmount({commit}, payload) {
      commit(Commands.setInitialAmount, payload);
    },
    initialize({commit}) {
      commit('initializePlayersWallets');
    },
    setFrom({commit}, payload) {
      commit(Commands.setFrom, payload);
    },
    setTo({commit}, payload) {
      commit(Commands.setTo, payload);
    },
    setTransferAmount({commit}, payload) {
      commit(Commands.setTransferAmount, payload);
    },
    addTransferAmount({commit}, payload) {
      commit(Commands.addTransferAmount, payload);
    },
    transfer({commit}) {
      commit(Commands.transfer);
    }
  }
})
