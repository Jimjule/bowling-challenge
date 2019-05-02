describe("gutter game", function() {

  beforeEach(function(){
    bowling = new Bowling
  })

  it("scores 0 on every roll", function() {
    bowling.makeRoll(0)
    bowling.makeRoll(0)
    bowling.makeRoll(0)
    bowling.makeRoll(0)
    bowling.makeRoll(0)
    bowling.makeRoll(0)
    bowling.makeRoll(0)
    bowling.makeRoll(0)
    bowling.makeRoll(0)
    bowling.makeRoll(0)
    bowling.makeRoll(0)
    bowling.makeRoll(0)
    bowling.makeRoll(0)
    bowling.makeRoll(0)
    bowling.makeRoll(0)
    bowling.makeRoll(0)
    bowling.makeRoll(0)
    bowling.makeRoll(0)
    bowling.makeRoll(0)
    bowling.makeRoll(0)
    expect(bowling.total).toEqual(0);
    expect(bowling.status).toEqual('Game Over');
  });
});
