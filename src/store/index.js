import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import mutations from './mutation'
import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
    actions,
    state,
    mutations
})