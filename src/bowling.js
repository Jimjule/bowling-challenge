function Bowling() {
  this.score = []
  this.roll = 1
  this.frame = Math.ceil(this.roll/2)
  this.rollMax = 20
  this.frameMax = 10
  this.status = 'In progress'
};

Bowling.prototype.makeRoll = function(pins) {
  bowling.gameOver()
  bowling.addScore(pins)
  bowling.checkLast(pins)
  bowling.rollIncrement(pins)
};

Bowling.prototype.addScore = function(pins) {
  if (this.status == "Game Over") {
    return "You get NOTHING"
  } else {
    this.score.push(pins)
  }
};

Bowling.prototype.checkLast = function(pins) {
  if (this.roll == 19 && pins == 'strike') {
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
  if (pins == 'strike' && this.roll != 19) {
    this.roll += 2
  } else {
    this.roll ++
  }
}
