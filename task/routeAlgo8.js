// console.time("executionTime");

const paths = {
  0: [4, 2],
  1: [1, 3],
  2: [4, 3],
  3: [2, 3],
  4: [1, 2],
  5: [1, 4],
};
debugger;

function valid(input, lastExit) {
  const validCombinations = {
    4: 2,
    1: 3,
    2: 4,
    3: 1,
  };
  return validCombinations[input] === lastExit;
}

function routeAlgo(grid) {
  const rows = grid.length;
  // console.log(rows);
  const column = grid[0].length;
  // console.log(column);

  const lastRow = rows - 1;
  // console.log(lastRow);
  const lastCol = column - 1;
  // console.log(lastCol);

  const first = grid[0][0];
  // console.log(first);
  const last = grid[lastRow][lastCol];
  // console.log(last);

  if ((first != 0 && first != 2) || (last != 0 && last != 4)) {
    return false;
  }

  let x = 0;
  let y = 0;
  let moves = [];
  let lastMove;

  // Loop through the map data until a break condition is met
  while (true) {
    const value =
      (grid && grid[x] && grid[x][y]) !== undefined //ensures that grid, grid[x] is truthy, grid[x][y] is not equal to undefined
        ? grid[x][y]
        : undefined; //value will be assigned result of grid[x][y]; otherwise, undefined.

    // Break if the current position is outside bounds
    if (value === undefined) break;
    // Extract start and end based on the current value in paths
    const [start, end] = paths[value];

    if (lastMove === undefined) {
      lastMove = end;
    } else if (!valid(start, lastMove)) {
      // break if the move is not valid
      break;
    }

    moves.push(value);
    lastMove = end; // Update lastMove based on the current value of 'end'
    // Update position based on the end
    if ([3, 1].indexOf(end) !== -1) {
      x++;
    }
    if ([4, 2].indexOf(end) !== -1) {
      y++;
    }
  }

  console.log("Moves :", moves);
  // checks if traversal ends at the bottom-right corner
  return x === lastRow && y - 1 === lastCol && [0, 4].includes(moves.pop()); // ensures that last move is valid either 0 or 4 .
}

const grid = [
  [0, 2, 1],
  [5, 4, 0],
];

console.log(routeAlgo(grid));

// console.timeEnd("executionTime");

/* o/p : Moves : [ 0, 2, 4, 0 ]
                 true           */
