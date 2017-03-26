'use strict';

const scrapeIt = require("scrape-it");
const fsp = require('fs-promise');
// Needed hidden URL: "/running_races/2016-tcs-nyc-marathon/results?page=3"

var promisesArray = [];
for (var i = 1; i <= 200; i++) {
  promisesArray.push(getRunnerDataForPage(i));
};

function getRunnerDataForPage(pageNum) {
  // Promise interface
   return scrapeIt("https://www.strava.com/running_races/2016-tcs-nyc-marathon/results?page=" + pageNum, {
    // Fetch runner data
    runners: {
      listItem: "#results-table tbody tr"
      , data: {
        athleteName: "td.athlete-name",
        athleteRank: {
          selector: "td.athlete-rank",
          convert: function (rank) {
            return parseInt(rank);
          }
        },
        finishTime: "td.finish-time",
        finishTimeInMinutes: {
          selector: "td.finish-time",
          convert: function (finishTime) {
            // expected format: h:mm:ss
            var array = finishTime.split(':').map(function (x) {
              return parseInt(x);
            });
            var hours = array[0];
            var minutes = array[1];
            var finishTimeInMinutes = (hours * 60) + (minutes);
            return finishTimeInMinutes;
          }
        },
        finishPace: "td.finish-pace",
        athleteGender: "td.athlete-gender",
        athleteAge: {
          selector: "td.athlete-age",
          convert: function (age) {
            return parseInt(age);
          }
        },
        //pacePerMile: "td."
      }
    }
  })
};

Promise.all(promisesArray).then(values => {
  var flattened = values.reduce(
  function(acc, curr) {
    return acc.concat(curr.runners);
  }, []);
  fsp.writeFile('runners.json', JSON.stringify(flattened), 'utf-8')
  .then(function(contents){
    console.log('hello world');
  });
})