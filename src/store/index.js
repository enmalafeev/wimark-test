import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const corsOrigin = 'http://cors-anywhere.herokuapp.com/';
const serverURL = 'https://rssi.wmrk.tk/';

export default new Vuex.Store({
  state: {
    rawData: false,
  },
  mutations: {
    fillUpData(state, response) {
      state.rawData = response;
    },
  },
  actions: {
    fetchData({ commit }) {
      return axios
        .get(`${corsOrigin}${serverURL}`)
        .then((response) => {
          commit('fillUpData', response.data);
        });
      // .catch((e) => console.log(e));
    },
  },
  getters: {
    getUsersData: (state) => Object.entries(state.rawData)
      .map(([key, value]) => ({ id: key, userData: value })),
    getUserSignals: (state, getters) => (id) => getters.getUsersData
      .find((user) => user.id === id).userData.signals,
  },
});
