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
              "Don't comment bad code ‐ rewrite it.",
              "Good design is not about making grand plans, but about taking things apart.",
              "Don't live with broken windows",
              "First do it, then do it right, then do it better.",
              "When you feel the need to write a comment, first try to refactor the code so that any comment becomes superfluous.",
              "When you find you have to add a feature to a program, and the program's code is not structured in a convenient way to add the feature, first refactor the program to make it easy to add the feature, then add the feature."];



function sayQuote() {say.speak('Leo', _.sample(quotes));}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

(function loop() {
    var minute = 60000;
    var every = getRandomInt(1,45) * minute
    setTimeout(function() {
            //alert('A');
            sayQuote();
            loop();
    }, every);
}());
