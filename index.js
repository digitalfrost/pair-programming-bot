#! /usr/bin/env node

var say = require('say');
var _ = require('underscore');

var quotes = ["How long since you checked something in?",
              "You're going to refactor that, right?",
              "What's the shortest line to the end of this task?",
              "You ain't gonna need it",
              "Have you got a test for that?",
              "Talk is cheap. Show me the code.",
              "Good design adds value faster than it adds cost.",
              "Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.",
              "I don't care if it works on your machine! We are not shipping your machine!"];



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
