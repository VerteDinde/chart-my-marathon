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

// populate a table for now with my sample three runners
Runner.prototype.toHtml() = function() {
  var $newRunner = $('article');
  $('#runners tr').not(':first').not(':last').remove();
  var html = '';
  for (var i = 0; i < data.length; i++)
    html += '<tr><td>' + data[i].FirstName +
      '</td><td>' + data[i].Age + '</td></tr>';
  $('#thetable tr').first().after(html);
}

data.forEach(function(i) {
  runners.push(new Runner(i));
});

runners.forEach(function(runner) {
  $('#runners').append(runner.toHtml());
});