import Vue from 'vue'
import Vuex from 'vuex'

import wakatimeApi from './api/wakatime'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    codingLanguageList: []
  },
  mutations: {
    SET_CODING_LANGUAGE_LIST (state, payload) {
      Vue.set(state, 'codingLanguageList', payload)
    }
  },
  getters: {
    codingLanguageList (state) {
      return state.codingLanguageList
    }
  },
  actions: {
    retrieveCodingLanguageList ({ commit }) {
      wakatimeApi.getCodingLanguages()
        .then(data => {
          commit('SET_CODING_LANGUAGE_LIST', data)
        })
    }

  }
})
