'use strict';
// Init all charts
createGenderChart();
createFinishTimeChart();
createPaceTimeChart();

//Donut Chart: Gender
function createGenderChart() {
  var ctx = document.getElementById('gender-ratio');
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
};

// Finish Time Chart
function createFinishTimeChart() {
  var ctx = document.getElementById('finish-times');
  var myBubbleChart = new Chart(ctx, {
    type: 'bubble',
    data: {
      datasets: [
        {
          label: 'First Dataset',
          data: [
            {
              x: 20,
              y: 30,
              r: 15
            },
            {
              x: 40,
              y: 10,
              r: 10
            }
          ],
          backgroundColor: "#FF6384",
          hoverBackgroundColor: "#FF6384",
        }]
    },
    options: {
      elements: {
        points: {
          borderWidth: 1,
          borderColor: 'rgb(0, 0, 0)'
        }
      }
    }
  });
}

// Finish Time Chart
function createPaceTimeChart() {
  var ctx = document.getElementById('pace-times');
  var myLineChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ["2", "5k", "4", "6", "8", "10k", "11", "13.1", "14", "16", "18", "20", "22", "24", "26.2"],
      datasets: [
        {
          label: "My First dataset",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
          borderCapStyle: 'cloud',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: "rgba(75,192,192,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [65, 59, 80, 81, 56, 55, 40],
          spanGaps: false,
        }
      ]
    },
  });
}


