'use strict';

const scrapeIt = require("scrape-it");

// Promise interface
scrapeIt("https://www.strava.com/running-races/2016-tcs-nyc-marathon#_=_", {
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
    }
  }

}).then(result => {
  console.log(result);
});