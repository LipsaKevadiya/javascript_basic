function diagonalSort(matrix) {
  debugger;
  const cols = matrix[0].length;
  const rows = matrix.length;

  const maxLength = Math.max(cols, rows);

  for (let k = 0; k <= 2 * (maxLength - 1); k++) {
    // to store diagonal
    const temp = [];

    // Traverse the current diagonal from the bottom to the top 3,2,1,0
    for (let y = cols - 1; y >= 0; y--) {
      // Calculate the horizontal index for the current element along the diagonal
      let x = k - y;

      // Check if (x, y) are within matrix bounds
      if (x >= 0 && x < rows) {
        // Push the element to the temp array
        temp.push(matrix[y][x]);
      }
    }

    // Sort temp array
    temp.sort((a, b) => a - b);

    // Loop to update the original matrix with the sorted values
    for (let y = cols - 1; y >= 0; y--) {
      // Calculate the horizontal index for the current element along the diagonal

      let x = k - y;

      // Check if the current coordinates (x, y) are within the matrix bounds
      if (x >= 0 && x < rows) {
        matrix[y][x] = temp.pop();

        // retrieves and removes the last element from the sorted temp array
      }
    }
  }

  // Return the modified matrix
  return matrix;
}

var matrix = [
  [1, 3, 9, 4],
  [9, 5, 7, 7],
  [3, 6, 9, 7],
  [1, 2, 2, 2],
];

var oneLineOutput = diagonalSort(matrix);

//column-wise representation
var columnWiseOutput = oneLineOutput[0].map((_, colIndex) =>
  oneLineOutput.map((row) => row[colIndex])
);
// uses map to iterate over the columns of the first row
// maps each column by extracting the values from the corresponding column in each row of oneLineOutput

columnWiseOutput.forEach((row) => console.log(row.join(" "))); //rows on separate lines

//var sortedMatrix = diagonalSort(matrix);
// Print the sorted matrix as a 2D array
//sortedMatrix.forEach((row) => console.log(row));

// o/p :
// 1 9 9 7
// 3 5 6 9
// 3 4 7 7
// 1 2 2 2
