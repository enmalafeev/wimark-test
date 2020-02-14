import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const corsOrigin = 'http://cors-anywhere.herokuapp.com/';
const serverURL = 'https://rssi.wmrk.tk/';
const getIsoTime = (ts) => (new Date(ts * 1000))
  .toISOString()
  .slice(0, 19)
  .replace('T', ' ');

export default new Vuex.Store({
  state: {
    rawData: false,
    loaded: false,
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
          this.state.loaded = true;
        });
      // .catch((e) => console.log(e));
    },
  },
  getters: {
    getUsersData: (state) => Object.entries(state.rawData)
      .map(([key, value]) => ({ id: key, userData: value })),
    getUserSignals: (state, getters) => (id) => getters.getUsersData
      .find((user) => user.id === id).userData.signals,
    getUserRSSI: (state, getters) => (id) => getters.getUserSignals(id)
      .map(({ rssi }) => rssi),
    getUserTS: (state, getters) => (id) => getters.getUserSignals(id)
      .map(({ ts }) => getIsoTime(ts)),
  },
});
