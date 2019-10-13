import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allUsers: [
      { id: 'q6801', pw: '1234', pwRecheck: '1234', studentNumber: '2016136100', majors: 'computer', phoneNumber: '6801'}
    ],
    signInState: false
  },
  mutations: {

  },
  actions: {

  }
})
