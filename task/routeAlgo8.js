const grid = [
  [2, 3, 2],
  [1, 1, 1],
  [1, 1, 1],
  [4, 5, 4],
];
//   [
//     [0, 2, 1],
//     [5, 4, 0],
//   ];

// [
//     [2, 0, 0, 0, 0, 0],
//     [4, 0, 2, 0, 0, 0],
//     [0, 0, 1, 3, 2, 1],
//     [0, 0, 4, 5, 1, 0],
//     [0, 0, 0, 0, 1, 0],
//     [0, 0, 0, 0, 4, 0],
//   ];

const paths = {
  0: [4, 2],
  1: [1, 3],
  2: [4, 3],
  3: [2, 3],
  4: [1, 2],
  5: [1, 4],
};

const validCombinations = {
  4: 2,
  1: 3,
  2: 4,
  3: 1,
};

//debugger;

function routeAlgo(grid) {
  const rows = grid.length;
  const column = grid[0].length;

  const lastRow = rows - 1;
  const lastCol = column - 1;

  const first = grid[0][0];
  const last = grid[lastRow][lastCol];

  if (!(first === 0 || first === 2) || !(last === 0 || last === 4)) {
    return false;
  }

  let x = 0;
  let y = 0;

  let actions = [];
  let lastMove = 2;

  // Loop through the map data until a break condition is met
  while (true) {
    const value = grid[x][y];

    if (x === grid.length - 1 || y === grid[0].length - 1) {
      if (value === undefined) {
        break;
      }
    }

    let [start, end] = paths[value];
    console.log([start, end]);

    const Index = [start, end].indexOf(validCombinations[lastMove]); //1
    console.log("Index :::", Index);
    if (Index < 0) {
      return false;
    } // if Index is equal to 0. If it is, result is 1; otherwise, result is 0.
    end = [start, end][[Index == 0 ? 1 : 0]];

    if (lastMove === undefined) {
      lastMove = end;
    } else if (![start, lastMove]) {
      // break if the move is not valid
      break;
    }

    actions.push(value);
    lastMove = end;

    // Update position based on the end

    if ([3].includes(end)) {
      x++;
    }
    if ([2].includes(end)) {
      y++;
    }
    if ([1].includes(end)) {
      x--;
    }
    if ([4].includes(end)) {
      y--;
    }
  }
  console.log("actions :", actions);
  //checks if traversal ends at the bottom-right corner
  return x === lastRow && y - 1 === lastCol && [0, 4].includes(actions.pop());
  // ensures that last move is valid either 0 or 4 .
}

console.log(routeAlgo(grid));

/* o/p: 

[ 4, 3 ]
Index ::: 0
[ 1, 3 ]
Index ::: 0
[ 1, 3 ]
Index ::: 0
[ 1, 2 ]
Index ::: 0
[ 1, 4 ]
Index ::: 1
[ 1, 3 ]
Index ::: 1
[ 1, 3 ]
Index ::: 1
[ 2, 3 ]
Index ::: 1
[ 4, 3 ]
Index ::: 0
[ 1, 3 ]
Index ::: 0
[ 1, 3 ]
Index ::: 0
[ 1, 2 ]
Index ::: 0
actions : [
  2, 1, 1, 4, 5,
  1, 1, 3, 2, 1,
  1, 4
]
true
*/
