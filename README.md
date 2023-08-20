# Four player pong

## Tasks to change
- [x] require space to start new game
- [x] add testing mode with static start
- [x] let paddle speed influence reflection angle
- [x] change key bindings
- [x] fix bug with ball inside paddel
- [ ] round corners (visually and effectively)
- [ ] center game on page
- [ ] come up with a good name

## Objective
The ball generates towards a random angle from the center during the start of each cycle. Each player uses a paddle to hit the ball and make it go out of bounds to get a point. Final objective of the game is to score as many points as possible.

## Rules
- The most recent paddle to hit the ball gets a point.
- No point changes if ball hasn't been hit by a paddle during current cycle.
- First player to get **10** points wins.
