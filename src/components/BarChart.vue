<script>
import { Bar, mixins } from 'vue-chartjs';

export default {
  extends: Bar,
  mixins: [mixins.reactiveProp],
  props: ['chartLabels', 'chartData', 'options'],
  mounted() {
    this.renderChart(
      {
        labels: this.chartLabels,
        datasets: [
          {
            label: 'rssi to ts',
            data: this.chartData,
            backgroundColor: '#007BFE',
            hoverBackgroundColor: '#FFDE40',
          },
        ],
      },
      this.options,
    );
  },
};
</script>
