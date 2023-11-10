import { createStore } from 'vuex'
import constants from '@/constants'

const store = createStore({
  state: () => ({
    sideBarActive: constants.SIDEBAR.HOME,
    loadingStatus: false
  }),
  getters: {
    getSideBarActive (state) {
      return state.sideBarActive
    },
    getLoading(state) {

      return state.loadingStatus
    }
  },

  mutations: {
    setSideBarActive (state, newValue) {
      state.sideBarActive = newValue
    },

    setLoadingActive (state, newValue) {
      state.loadingStatus = newValue
    }
  },

  actions: {
    activeSideBar: ({ commit }, data) => {
      commit('setSideBarActive', data)
    },
    setLoading: ({commit}, data) => {
      commit('setLoadingActive', data)
    }
  }
})

export default store
