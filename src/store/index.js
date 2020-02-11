import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const corsOrigin = 'http://cors-anywhere.herokuapp.com/';
const serverURL = 'https://rssi.wmrk.tk/';

export default new Vuex.Store({
  state: {
    rowData: {},
  },
  mutations: {
    fillUpData(state, response) {
      state.rowData = response;
    },
  },
  actions: {
    fetchData({ commit }) {
      return axios
        .get(`${corsOrigin}${serverURL}`)
        .then((response) => {
          commit('fillUpData', response.data);
          console.log('addSkill', response.data);
        })
        .catch((e) => console.log(e));
    },
  },
  getters: {
    getUsersData: (state) => state.rowData,
  },
  modules: {
  },
});
