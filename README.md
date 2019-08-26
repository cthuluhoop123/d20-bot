
# d20-bot
DiscordJS Dice Bot for Dungeons and Dragons

Commands
=====
*  ```!ping```: Pings bot<br>
*  ```!roll (dice notation)```: Roll a dice with dnd dice notation. Any duplicate dice (i.e. 2d4 d4) will be added together (i.e. 3d4).
*  ```!inorder (dice notation)```: Roll a dice with dnd dice notation, except the reply will be in order.

## Roll Examples
`!roll d4` will roll a 4 sided dice 1 time.<br>`!roll 2d6` will roll a 6 sided dice 2 times.<br>`!roll 2d20 d6 d10 d20` will roll a 6 sided dice 1 time, a 10 sided dice 1 time, and a 20 sided dice 3 times.

## Inorder Examples
`!inorder d4 d12 2d4` will result in a d4 roll, a d12 roll, then a 2d4 roll.
i.e.
`!inorder d4 d12 2d4`
```
d4: (d4 roll)
d12: (d12 roll)
2d4: (2d4 roll)
```

### Note
`!roll` will only accept a dice side value of `4`,`6`,`8`,`10`,`12`,`20`, or `100`, and will only accept a dice quantity value of greater than or equal to `0`

Installation
=====
1) Clone this repository
2) Open a console in the `d20-bot` folder and run ```npm install```
3) Create a ```.env``` file inside the folder with ```TOKEN=(token)``` inside, replacing (token) your discord bot token.
4) To start, run ```node d20-bot.js``` or ```npm test```