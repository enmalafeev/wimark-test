<template lang="pug">
  div.container
    h1 {{$route.params.id}} Page
    button(@click="goBack") Назад
    //- pre {{getUserSignals($route.params.id)}}
    BarChart(
      :chart-data="getUserSignals($route.params.id)"
      :options="this.options")
</template>

<script>
import { mapGetters } from 'vuex';
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
      },
    };
  },
  computed: {
    ...mapGetters(['getUsersData', 'getUserSignals']),
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>
