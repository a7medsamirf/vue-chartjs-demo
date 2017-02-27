import {PolarArea} from 'vue-chartjs'

export default PolarArea.extend({
  mounted () {
    this.renderChart({
      labels: ['Eating', 'Drinking'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: 'rgba(0, 216, 255, .3)',
          borderColor: 'rgba(0, 216, 255, .8)',
          borderWidth: 1,
          pointBackgroundColor: '#fff',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(179,181,198,1)',
          data: [65, 59, 90, 81, 56, 55, 40]
        },
        {
          label: 'My Second dataset',
          backgroundColor: 'rgba(228, 102, 81, .3)',
          borderColor: 'rgba(255,99,132,1)',
          pointBackgroundColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(255,99,132,1)',
          data: [28, 48, 40, 19, 96, 27, 100]
        }
      ]
    }, {responsive: true, maintainAspectRatio: false})
  }
})
