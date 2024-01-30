function findTheTriples(arr, queries) {
  const result = [];

  for (const query of queries) {
    const [x, y, z] = query;
    let count = 0;

    // Nested for loops to iterate through all possible triples (i, j, k) in the arr
    for (let i = 0; i < arr.length - 2; i++) {
      // i < j
      for (let j = i + 1; j < arr.length - 1; j++) {
        // i < j and j < k
        for (let k = j + 1; k < arr.length; k++) {
          // Check if the current triple match with query
          if (arr[i] === x && arr[j] === y && arr[k] === z) {
            count++;
          }
        }
      }
    }

    result.push(count);
  }

  return result;
}

const arr1 = [1, 2, 3, 4, 5];
const queries1 = [
  [1, 2, 4],
  [2, 4, 3],
  [1, 1, 1],
];
console.log(findTheTriples(arr1, queries1));

const arr2 = [1, 2, 2, 1, 2, 1, 2];
const queries2 = [
  [1, 1, 2],
  [1, 2, 1],
];
console.log(findTheTriples(arr2, queries2));

const arr3 = [1, 1, 1, 1];
const queries3 = [[1, 1, 1]];
console.log(findTheTriples(arr3, queries3));

/*o/p:  [ 1, 0, 0 ]
        [ 4, 6 ]
        [ 4 ] */
