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

// Calculate averages: finishTime, finishPace, age, (stretch: nationality)

// populate a table for now with my sample three runners
Runner.prototype.toHtml = function() {
  $('#runners-table tr').not(':first').not(':last').remove();
  var html = '';
  for (var i = 0; i < runners.length; i++)
    html +=
      '<tr><td>' + runners[i].athleteName +
      '</td><td>' + runners[i].athleteRank +
      '</td><td>' + runners[i].athleteAge +
      '</td><td>' + runners[i].athleteGender +
      '</td><td>' + runners[i].finishTime +
      '</td><td>' + runners[i].finishPace + '</td></tr>';
  $('#runners-table tr').first().after(html);
};

// sorting the runners by rank
console.log(data);
data.sort(function(a, b) {
  return (a.athleteRank) - (b.athleteRank);
});
console.log(data);

//pushing all runner instances to runners[]
data.forEach(function(i) {
  runners.push(new Runner(i));
  console.log(runners);
});

// append to DOM
runners.forEach(function(runner) {
  $('#runners').append(runner.toHtml());
});