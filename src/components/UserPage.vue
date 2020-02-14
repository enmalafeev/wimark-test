<template lang="pug">
  div.container.mt-5
    h1 {{getUserName($route.params.id)}} Page
    button.btn.btn-primary(@click="goBack") Назад
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
        'getUserName',
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
