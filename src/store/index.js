import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pageSideBarClass:'',
    user:{
      token:localStorage.usertoken,
    }
  },
  mutations: {
    changeSideBarClass (state) {
      // mutate state
      state.pageSideBarClass='mini-sidebar'
    }
  },
  actions: {
    changeSideBarClass (context) {
      context.commit('changeSideBarClass')
    }
  },
  modules: {
  },
  getters:{
    auth(state){
      return state.user
    }
  }
})
