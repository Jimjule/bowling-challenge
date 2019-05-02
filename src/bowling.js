function Bowling() {
  this.score = []
  this.roll = 1
  this.frame = Math.ceil(this.roll/2)
  this.rollMax = 20
  this.frameMax = 10
  this.status = 'In progress'
  this.total = 0
};

Bowling.prototype.makeRoll = function(pins) {
  bowling.gameOver()
  bowling.addScore(pins)
  bowling.strike()
  bowling.spare()
  bowling.fullScore()
  bowling.checkLast(pins)
  bowling.rollIncrement(pins)
};

Bowling.prototype.addScore = function(pins) {
  if (this.status != "Game Over") {
    // bowling.limitTen(pins)
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

Bowling.prototype.spare = function() {
  if (this.score[this.score.length - 3] + this.score[this.score.length - 2] == 10) {
    this.score[this.score.length - 2] = this.score[this.score.length - 2] + this.score[this.score.length - 1]
  }
};

Bowling.prototype.fullScore = function() {
  this.total = 0
  for (var k = 0; k < this.score.length; k++) {
    this.total += this.score[k]
  }
}

// Bowling.prototype.limitTen = function(pins) {
//   if ((pins + this.score[this.roll - 1]) > 10 && this.roll % 2 == 0) {
//     pins = 10 - this.score[this.roll - 1]
//   }
// };
