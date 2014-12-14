var assert = require('assert');
var Game = require('./game');
var game = new Game();
var testsCompleted = 0;

function initValueTest(){
  assert(game.theNumber > 0 && game.theNumber <= 1000, 'The random nuber should between 0 and 10001');
  testsCompleted ++;
}

function guessTest(){
  var theNumber = game.theNumber;
  console.log('the number is ' + theNumber);
  
  var greaterNumber = theNumber + 1;
  assert.equal(game.guess(greaterNumber), 1);
  
  var lessNumber = theNumber - 1;
  assert.equal(game.guess(lessNumber), -1);
  
  assert.equal(game.guess(theNumber), 0);
  testsCompleted ++;
  
  console.log('==============Completed ' + testsCompleted + ' tests.===============');
}


initValueTest();
guessTest();