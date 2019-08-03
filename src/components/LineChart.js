import {Line, mixins} from 'vue-chartjs' // We specify what type of chart we want from vue-chartjs and the mixins module
const { reactiveProp } = mixins

export default {
  name: 'HelloWorld',
  extends: Line,
  mixins: [reactiveProp],
  props: ['options'],
  mounted () {
    // this.chartData is created in the mixin.
    // If you want to pass options please create a local options object
    this.renderChart(this.chartData, this.options)
  },
  methods: {
    render: function() {
        this.renderChart(this.chartData, this.options)
    }
  }
}