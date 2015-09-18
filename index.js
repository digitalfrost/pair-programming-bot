#! /usr/bin/env node

var say = require('say');
var _ = require('underscore');

var quotes = ["How long since you checked something in?",
              "You're going to refactor that, right?",
              "What's the shortest line to the end of this task?",
              "You ain't gonna need it",
              "Have you got a test for that?",
              "Talk is cheap. Show me the code."];



function sayQuote() {say.speak('Leo', _.sample(quotes));}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

(function loop() {
    var minute = 60000;
    var every = getRandomInt(1,3) * minute
    setTimeout(function() {
            //alert('A');
            sayQuote();
            loop();
    }, every);
}());
