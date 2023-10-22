# The Tower Problem

The Tower Problem application is designed to strategically place 7 towers on an 8x8 chessboard following an initial user-placed tower. The app ensures that none of the towers can attack each other.

![Chessboard with Towers](https://i.imgur.com/ZCdgDgB.png)

## Logic

The app operates on an 8x8 chessboard where each cell can contain either a "1" representing a tower or "0" indicating an empty space.

The process begins with the user setting up the first tower, and then the application employs an algorithm to position the remaining towers.

## Initial Challenges

In the early stages of development, the code generated solutions that appeared too systematic. It started from cell (0, 0) and proceeded linearly towards cell (7, 7), inevitably leading to diagonal tower placement.

![Diagonal Tower Placement](https://i.imgur.com/2wQDCO9.png)

## Improved Solution

To create more organic and varied tower placements, a shuffle mechanism was introduced. This mechanism randomly selects an index from 0 to 63 and subjects it to three checks. The tower is placed only if it meets the specified criteria.

![Shuffle Mechanism](https://i.imgur.com/xbADVWX.png)
![Checks](https://i.imgur.com/ogRAjMc.png)

## Performance Considerations

While the shuffle mechanism added variety to the tower placements, it resulted in a significant performance loss. Randomly selecting indices, especially towards the later stages, led to unnecessary checks on invalid positions. Although a solution could be devised by excluding impossible indices, ex: if a tower is placed at index 0, then 1-7, 8, 16, 24, 32, 40, 48, 54 are excluded from the pool, but this approach requires a complex mathematical formula. However, given the project's scope, the current solution is good enough, it wouldn't work for something like a 16x16 board tho.
## Acknowledgments

This project was with assistance from Stackoverflow and ChatGPT.

## Possible Expansions

Future enhancements could include the option to specify a custom table size. Additionally, the algorithm could be extended to address the "N-Queens" problem, where the objective is to place as many queens as possible on the board without attacking each other. However, full solutions for 8 queens might not always be achieved, primarily due to the absence of backtracking and the user's role in placing the initial queen. Furthermore, there is potential for optimizing the current code to run faster like I mentioned previously.


