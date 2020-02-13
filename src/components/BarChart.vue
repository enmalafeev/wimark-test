<script>
import { Bar, mixins } from 'vue-chartjs';
import { mapGetters } from 'vuex';

export default {
  extends: Bar,
  mixins: [mixins.reactiveProp],
  props: ['chartData', 'options'],

  mounted() {
    this.renderChart(
      {
        // labels: this.chartLabels,
        datasets: [
          {
            data: this.chartData,
            backgroundColor: 'red',
            hoverBackgroundColor: 'red',
          },
        ],
      },
      this.options,
    );
  },
  computed: {
    ...mapGetters(['getUserSignals']),
  },
  // watch: {
  //   chartData() {
  //     this.$data._chart.update();
  //   },
  //   chartLabel() {
  //     this.$data._chart.update();
  //   },
  // },
};
</script>
