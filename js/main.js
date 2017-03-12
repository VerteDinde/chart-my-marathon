'use strict';

var runners = [];

// returns Runner instances from data.js
function Runner(data) {
  this.dataActivityId = data.dataActivityId;
  this.athleteRank = data.athleteRank;
  this.athleteName = data.athleteName;
  this.athleteGender = data.athleteGender;
  this.athleteAge = data.athleteAge;
  this.finishTime = data.finishTime;
  this.finishPace = data.finishPace;
  this.athleteActivity = data.athleteActivity;
}

data.forEach(function(i) {
  runners.push(new Runner(i));
});



