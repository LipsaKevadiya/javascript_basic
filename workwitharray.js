//array map and filter  element replace
function element_replace() {
  const ele = Array(10, 20, 300, 40, 50);

  ele[ele.map((x, i) => [i, x]).filter((x) => x[1] == 300)[0][0]] = 30;

  console.log(ele);
}
element_replace();
//o/p: [ 10, 20, 30, 40, 50 ]

// Declare two arrays
let arr1 = [1, 2, 3, 5];
let arr2 = [1, 2, 3, 5];

// Comparing both arrays using stringify method
if (JSON.stringify(arr1) == JSON.stringify(arr2)) {
  console.log("True");
} else {
  console.log("False");
}
//o/p: True

// Function that converts the arrays to strings and then compares the strings
function isEqual(a, b) {
  return a.join() == b.join();
}

let a = [1, 2, 3, 4];
let b = [1, 2, 3, 5];

console.log(isEqual(a, b));
//o/p: false

//finds smallest value in array
const numbers = [4, 2, 7, 1, 0, 9, 5];
const minValue = Math.min(...numbers);
console.log(minValue);
//o/p: 0

//Flatten the 2D array into a 1D array using  concat() and reduce()
var test2d = [
  ["foo", "bar"],
  ["baz", "biz"],
];
var merged = test2d.reduce(function (prev, next) {
  return prev.concat(next);
});

console.log(merged);
//o/p: [ 'foo', 'bar', 'baz', 'biz' ]

// Adding or Removing Elements from Multidimensional Arrays
const multiArray = [
  [1, 2],
  [3, 4],
  [5, 6],
];
multiArray[1].push(7);
console.log(multiArray);
multiArray[1].pop(7);
console.log(multiArray);
//o/p: [ [ 1, 2 ], [ 3, 4, 7 ], [ 5, 6 ] ]
//     [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ]

//Accessing elements
for (let i = 0; i < multiArray.length; i++) {
  for (let j = 0; j < multiArray[i].length; j++) {
    console.log(multiArray[i][j]);
  }
}
console.log(multiArray.map((row) => row.join(" ")).join("\n"));
/*o/p: 1
       2
       3
       4
       5
       6 */
/*o/p: 1 2
       3 4
       5 6*/
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const m = matrix[0].length;
console.log(m);
// o/p: 3 (number of columns in the first row)

// Using Math.floor(),Math.ceil() to round down each element in the array
const decimalNumbers = [2.4, 5.8, 7.1, 3.6, 9.5];

const floorValues = decimalNumbers.map((num) => Math.floor(num));

const ceilValues = decimalNumbers.map((num) => Math.ceil(num));

console.log("Original Array:", decimalNumbers);
console.log("Floor Values:", floorValues);
console.log("Ceil Values:", ceilValues);
// o/p: Original Array: [ 2.4, 5.8, 7.1, 3.6, 9.5 ]
//Floor Values: [ 2, 5, 7, 3, 9 ]
//Ceil Values: [ 3, 6, 8, 4, 10 ]

//fill() method in array
const rows = 3;
const columns = 4;

const matrix1 = Array(rows)
  .fill()
  .map(() => Array(columns).fill(0));

console.log(matrix1);
// o/p: [ [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ] ]

var nums = [10, 50, 88];

nums.filter(function (n) {
  return n > 10;
});

console.log(nums);
//filter() doesn't mutate the original array
// o/p: [ 10, 50, 88 ]

var arr = [1, 2, 3, 4, 5];
arr.splice(2, 0);
console.log(arr);
//o/p:[ 1, 2, 3, 4, 5 ]
