var theNumber = 0;

function Game(){
  this.theNumber = getNewNumber();
}

function getNewNumber(){
  return Math.floor(Math.random() * 1000 + 1);
}

Game.prototype.guess = function(num){
  console.log('guess ' + num + ' with ' + this.theNumber);
  if (num == this.theNumber){
    this.theNumber = getNewNumber();
    return 0;
  }
  else if (num > this.theNumber){
    return 1;
  }
  else{
    return -1;
  }
}

module.exports = Game;