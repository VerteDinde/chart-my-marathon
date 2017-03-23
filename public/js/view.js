'use strict';

// pulling data for gender chart
function genderChartData() {
  var initialValue = {
    femaleCount: 0,
    maleCount: 0
  };
  var genderResults = data.reduce(function(acc, curr) {
   if (curr.athleteGender === 'F') {
     acc.femaleCount += 1;
   } else if (curr.athleteGender === 'M') {
     acc.maleCount += 1;
   }
   return acc;
  }, initialValue);

  return [genderResults.femaleCount, genderResults.maleCount];
}

// data for finish time chart
function finishTimeData() {

}

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
        "Female",
        "Male",
      ],
      datasets: [
        {
          data: genderChartData(),
          backgroundColor: [
            "#FFCE56",
            "#36A2EB"
          ],
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
          label: 'Average Run',
          data: [
            {
              x: 20,
              y: 30,
              r: 30
            },
            {
              x: 40,
              y: 10,
              r: 10
            }
          ],
          backgroundColor: "#FF6384",
          hoverBackgroundColor: "#FF6384",
        },
        {
          label: 'My Run',
          data: [
            {
              x: 30,
              y: 25,
              r: 60
            },
            {
              x: 26,
              y: 15,
              r: 5
            }
          ],
          backgroundColor: "#FFCE56",
          hoverBackgroundColor: "#FFCE56",
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


