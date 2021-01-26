const state = {
  tradetypeId: null,
  tradeseqId: null,
  tradeseqName: null
}
const getters = { // 实时监听state值的变化(最新状态)
  getTradetypeId (state) { // 方法名随意,主要是来承载变化的showFooter的值
    return state.tradetypeId
  },
  getTradeseqId () { // 方法名随意,主要是用来承载变化的changableNum的值
    return state.tradeseqId
  },
  getTradeseqName () {
    return state.tradeseqName
  }
}

const mutations = {
  newTradetypeId (state, id) {
    state.tradetypeId = id
  },
  newTradeseqId (state, id) {
    state.tradeseqId = id
  },
  newTradesqName (state, name) {
    state.tradeseqName = name
  }
}

const actions = {
  tradetypeIdAction ({ commit }, id) {
    commit('newTradetypeId', id)
  },
  tradeseqIdAction ({ commit }, id) {
    commit('newTradeseqId', id)
  },
  tradeseqNameAction ({ commit }, id) {
    commit('newTradesqName', id)
  }
}
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
