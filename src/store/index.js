import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pageSideBarClass:'',
    user:{
      token:localStorage.usertoken,
      hospital_id:localStorage.hospital_id,
      user_type:localStorage.user_type
    },
    
    selectedPage:"hospital"
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
