describe("perfect game", function() {

  beforeEach(function(){
    bowling = new Bowling
  })

  it("scores 0 on every roll", function() {
    bowling.makeRoll(10)
    bowling.makeRoll(10)
    bowling.makeRoll(10)
    bowling.makeRoll(10)
    bowling.makeRoll(10)
    bowling.makeRoll(10)
    bowling.makeRoll(10)
    bowling.makeRoll(10)
    bowling.makeRoll(10)
    bowling.makeRoll(10)
    bowling.makeRoll(10)
    bowling.makeRoll(10)
    expect(bowling.status).toEqual('Game Over');
    expect(bowling.total).toEqual(300);
  });
});
