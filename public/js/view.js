'use strict';

// pulling data for gender chart
function genderChartData() {
  var initialValue = {
    femaleCount: 0,
    maleCount: 0
  };
  var genderResults = data.reduce(function (acc, curr) {
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
  var initialValue = {
    twoHours: 0,
    twoHours30: 0,
    threeHours: 0,
    threeHours30: 0,
    fourHours: 0
  };
  debugger;
  var finishTimes = data.reduce(function (acc, curr) {
    if (curr.finishTimeInMinutes < 150) {
      acc.twoHours += 1;
    } else if (curr.finishTimeInMinutes < 180) {
      acc.twoHours30 += 1;
    } else if (curr.finishTimeInMinutes < 210) {
      acc.threeHours += 1;
    } else if (curr.finishTimeInMinutes < 240) {
      acc.threeHours30 += 1;
    } else if (curr.finishTimeInMinutes < 270) {
      acc.fourHours += 1;
    } else if (curr.finishTimeInMinutes < 300) {
      acc.fourHours30 += 1;
    } else if (curr.finishTimeInMinutes < 330) {
      acc.fiveHours += 1;
    } else if (curr.finishTimeInMinutes < 360) {
      acc.fiveHours30 += 1;
    } else if (curr.finishTimeInMinutes < 390) {
      acc.sixHours += 1;
    }
    return acc;
  }, initialValue);
  return [
    finishTimes.twoHours, finishTimes.twoHours30, finishTimes.threeHours,
    finishTimes.threeHours30, finishTimes.fourHours, finishTimes.fourHours30,
    finishTimes.fiveHours, finishTimes.fiveHours30, finishTimes.sixHours
  ];
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
    type: 'bar',
    data: {
      labels: ["2:00", "2:30", '3:00', '3:30', '4:00', '4:30', '5:00', '5:30'],
      datasets: [{
        label: '# of Votes',
        data: finishTimeData(),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
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


