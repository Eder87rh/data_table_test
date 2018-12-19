import Vue from 'vue'
import Vuex from 'vuex'
import modPayments from './modules/payments'
import moodFilters from './modules/filters'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    modPayments,
    moodFilters,
  },
  state: {
    
  },
  mutations: {

  },
  actions: {

  }
})
