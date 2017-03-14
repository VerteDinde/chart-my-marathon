const scrapeIt = require("scrape-it");

// Promise interface
scrapeIt("https://www.strava.com/running-races/2016-tcs-nyc-marathon#_=_", {
    // Fetch runner data
    runners: {
        listItem: "#results-table tbody tr"
        , name: "pages"
        , data: {
            athleteName: "td.athlete-name",
            athleteRank: {
                selector: "td.athlete-rank",
                convert: function (rank) {
                    return parseInt(rank);
                }
            },
            finishTimeInMinutes: {
                selector: "td.finish-time",
                convert: function (finishTime) {
                    // expected format: h:mm:ss
                    var array = finishTime.split(':').map(function(x) {
                        return parseInt(x);
                    });
                    var hours = array[0];
                    var minutes = array[1];
                    var finishTimeInMinutes = (hours * 60) + (minutes);
                    return finishTimeInMinutes;
                }
            }
        //   , url: {
        //         selector: "a"
        //       , attr: "href"
        //     }
        }
    }

}).then(result => {
    console.log(result);
});