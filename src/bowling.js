function Bowling() {
  this.score = []
  this.roll = 1
  this.frame = Math.ceil(this.roll/2)
  this.rollMax = 20
  this.frameMax = 10
  this.status = 'In progress'
  // this.tempScore = []
  this.total = 0
};

Bowling.prototype.makeRoll = function(pins) {
  bowling.gameOver()
  bowling.addScore(pins)
  bowling.scoreCalc()
  bowling.strike()
  // bowling.turnScore()
  // bowling.total()
  bowling.checkLast(pins)
  bowling.rollIncrement(pins)
};

Bowling.prototype.addScore = function(pins) {
  if (this.status != "Game Over") {
    this.score.push(pins)
  }
};

Bowling.prototype.checkLast = function(pins) {
  if (this.roll == 19 && pins == 10) {
    this.rollMax = 21
  }
};

Bowling.prototype.gameOver = function(pins) {
  if (this.roll >= this.rollMax) {
    this.status = 'Game Over'
    this.roll = this.rollMax
  }
};

Bowling.prototype.rollIncrement = function(pins) {
  if (pins == 10 && this.roll < 19) {
    this.roll += 2
  } else {
    this.roll ++
  }
}

Bowling.prototype.strike = function() {
  if (this.score[this.score.length - 3] == 10) {
    this.score[this.score.length - 3] = this.score[this.score.length - 2] + this.score[this.score.length - 1] + 10
  }
};

Bowling.prototype.scoreCalc = function() {
  this.tempScore = []
  for (var i = 0; i < this.score.length; i++) {
    this.tempScore.push(this.score[i])
  }
}

Bowling.prototype.total = function() {
  this.total = 0
  for (var k = 0; k < tempScore.length; k++) {
    this.total += tempScore[k]
  }
}
