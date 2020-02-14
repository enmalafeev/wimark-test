<template lang="pug">
  div.container
    h1 {{$route.params.id}} Page
    button(@click="goBack") Назад
    //- pre {{getUserTS($route.params.id)}}
    BarChart(
      v-if="loaded"
      :chart-labels="getUserTS($route.params.id)"
      :chart-data="getUserRSSI($route.params.id)"
      :options="this.options"
    ).bar-chart
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import BarChart from './BarChart.vue';

export default {
  components: {
    BarChart,
  },
  data() {
    return {
      options: {
        responsive: true,
        tooltips: {
          backgroundColor: '#FFF',
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
            },
          }],
        },
      },
    };
  },
  computed: {
    ...mapGetters(
      [
        'getUsersData',
        'getUserSignals',
        'getUserRSSI',
        'getUserTS',
      ],
    ),
    ...mapState({
      loaded: (state) => state.loaded,
    }),
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
.bar-chart {
  height: 100vh;
}
</style>
