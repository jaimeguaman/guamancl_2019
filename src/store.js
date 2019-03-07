import Vue from 'vue'
import Vuex from 'vuex'

import wakatimeApi from './api/wakatime'
import projectApi from './api/projects'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    codingLanguageList: [],
    projectList: []
  },
  mutations: {
    SET_CODING_LANGUAGE_LIST (state, payload) {
      Vue.set(state, 'codingLanguageList', payload)
    },
    SET_PROJECT_LIST (state, payload) {
      Vue.set(state, 'projectList', payload)
    }
  },
  getters: {
    codingLanguageList (state) {
      return state.codingLanguageList
    },
    projectList (state) {
      return state.projectList
    }
  },
  actions: {
    retrieveCodingLanguageList ({ commit }) {
      wakatimeApi.getCodingLanguages()
        .then(data => {
          commit('SET_CODING_LANGUAGE_LIST', data)
        })
    },
    retrieveProjectList ({ commit }) {
      projectApi.list()
        .then(data => {
          commit('SET_PROJECT_LIST', data)
        })
    }

  }
})
