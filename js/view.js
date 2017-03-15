'use strict';

var ctx = $('#gender-ratio');
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: [
      "Red",
      "Blue",
      "Yellow"
    ],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56"
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56"
        ]
      }]
  },
  options: {
    animation: {
      animateScale: true
    }
  }
});
