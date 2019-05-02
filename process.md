# Bowling Challenge

# Setup

- Jasmine template installed into main folder

# Process

TEST
Jasmine unit test expecting bowling.score to be an array

ERROR
(Bowling not defined)

RED
Made Bowling function

ERROR
(Expected undefined to equal [])


TEST
Jasmine unit test expecting bowling.roll to start at 1

ERROR
(Expected undefined to be 1)

GREEN
Defined bowling.roll


TEST
Jasmine unit test expecting bowling.frame to start at 1

ERROR
(Expected undefined to be 1)

GREEN
Defined bowling.frame


TEST
Jasmine unit test expecting bowling.addScore to add a number to this.score

ERROR
(Expected [] to contain 5)

GREEN
Made bowling.addScore push a number to this.score array


TEST
Jasmine unit test expecting bowling.addScore to increment this.roll

ERROR
(Expected 1 to equal 2)

GREEN
Made addScore increment


TEST
Jasmine unit test expecting bowling.addScore to increment this.roll by 2 if strike

ERROR
(Expected 2 to equal 3)

GREEN
Added if statement to addScore so strikes increment by 2


TEST
Jasmine unit test expecting bowling.rollMax to equal 20

ERROR
(Expected undefined to equal 20)

GREEN
Made rollMax = 20


TEST
Jasmine unit test expecting bowling.frameMax to equal 10

ERROR
(Expected undefined to equal 10)

GREEN
Made frameMax = 10


TEST
Jasmine unit test expecting bowling.rollMax to increase if turn 19 is a strike

ERROR
(Expected 20 to equal 21)

GREEN
Added a check19 function that increments rollMax if strike


REFACTOR
Added an extra condition to addScore to prevent skipping rolls on the final frame


  Scoring in bowling is the most difficult algorithm owing to strikes and spares.


TEST
Jasmine unit test expecting the game to end when the turn limit is exceeded.

ERROR
(Expected undefined to equal 'Game Over')

RED
Defined this.status

ERROR
(Expected '' to equal 'Game Over')

GREEN
Made this.status equal 'Game Over' once turn limit was reached


TEST
Jasmine unit test checking the functionality of Game Over, even when turn limit is extended.

GREEN



THINKING ABOUT SCORING


  ROLLS 1 2 3 4 5 6 7 8 9 10  11  12  13  14  15  16  17  18  19  20  (21)
  FRAME 1   2   3   4   5     6       7       8       9       10

  Score of frame algorithm is roll[2 * frame.position] + roll[2 * frame.position - 1]

  If frame[x].score == 10
    if roll[2 * frame.position - 1] == 10
      strike, and strike rules
      frame.score.push(strike)
    else
      spare


    Either implement above check as part of scoring function, or as a separate function called in scoring function


  To implement strike score:
  Put a new function at the top of addScore that uses similar syntax to above to check if 2 rolls back has a strike, and if 1 roll back has a spare, and if so adds the appropriate amount

SETUP
HTML webpage made to display game information like roll and frame number, and score. Buttons call the addScore function from 1-10.

REFACTOR
The addScore function was overloaded, so the makeRoll function handles the calling of the functions every turn, and addScore just...adds the score.

RED
Moving the functions has broken the spec tests, so they've been renamed accordingly.

GREEN

REFACTOR
addScore if/else statement refactored to just an if statement, with the same functionality.

  Now that I can see the scores, it's time to implement the strike functionality using the algorithms noted above.

TEST
Unit test expecting that scoring a strike and then two fours saves the strike as 18

ERROR
(Expected 'strike' to equal 18)

GREEN
Added strike function to makeRoll, so that if two rolls before was a strike, the strike is re-scored

REFACTOR Plan 1
The current strike system only works if strikes never overlap, which is unreasonable. It is necessary to refactor the score system to allow for a perfect game, which means calculating the score backwards every turn.

REFACTOR Plan 2
A simpler idea for now would be to change 'strike' to 10, allowing scoring in real time

Went with 2, fewer potential pitfalls

RED
Some tests broken by changing of 'strike' to 10

GREEN
Changed tests accordingly


TEST
Unit test for spares, expecting the total score after a spare to be higher

RED
14 != 18

GREEN
Created spare function, based on the logic of the strike function


<!-- TEST
Unit test for spares, expect total for frame to not exceed ten on turn

RED
Score can exceed ten (expect 5 to equal 4) -->
