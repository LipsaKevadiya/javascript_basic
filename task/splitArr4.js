function divideArr(arr) {
  const countt = {}; //created empty obj to count occurrences of each integer ele
  const result = [[], []]; //to store the final divided arr

  //to count occurence of ele
  for (let ele of arr) {
    if (countt[ele]) {
      countt[ele] += 1; // increments the value associated with the key ele in countt obj by 1
    } else {
      countt[ele] = 1;
    }
    if (countt[ele] > 2) {
      //if count more than twice returns empty arr
      return [];
    }
  }

  // Put integers occurring twice in both answer arr
  for (const ele in countt) {
    if (countt[ele] === 2) {
      result[0].unshift(ele); // add ele at begin
      result[1].unshift(ele);
    }
  }

  // Put other unique ele in the final arr
  let final_ans = 0;
  for (const ele of arr) {
    if (countt[ele] !== 2) {
      result[final_ans].unshift(ele);
      final_ans = 1 - final_ans; // Switch to other arr
    }
  }
  return result;
}

//eg
const ans1 = divideArr([2, 1, 2, 3, 3, 4]);
const ans2 = divideArr([1, 2, 2, 1]);
const ans3 = divideArr([2, 2, 3, 3, 2, 2]);

console.log(ans1);
console.log(ans2);
console.log(ans3);

/* o/p :  [ [ 1, '3', '2' ], [ 4, '3', '2' ] ]
          [ [ '2', '1' ], [ '2', '1' ] ]
          []
 */

function divideArr(arr: number[]): number[][] | [] {
  const countt: { [key: string]: number } = {}; // created empty object to count occurrences of each integer element
  const result: [number[], number[]] = [[], []]; // to store the final divided array

  // to count occurrence of element
  for (const ele of arr) {
    if (countt[ele]) {
      countt[ele] += 1; // increments the value associated with the key ele in countt object by 1
    } else {
      countt[ele] = 1;
    }
    if (countt[ele] > 2) {
      // if count more than twice returns empty array
      return [];
    }
  }

  // Put integers occurring twice in both answer arrays
  for (const ele in countt) {
    if (countt[ele] === 2) {
      result[0].unshift(parseInt(ele)); // add ele at the beginning
      result[1].unshift(parseInt(ele));
    }
  }

  // Put other unique elements in the final array
  let final_ans = 0;
  for (const ele of arr) {
    if (countt[ele] !== 2) {
      result[final_ans].unshift(ele);
      final_ans = 1 - final_ans; // Switch to the other array
    }
  }
  return result;
}

// Example usage
const ans1 = divideArr([2, 1, 2, 3, 3, 4]);
const ans2 = divideArr([1, 2, 2, 1]);
const ans3 = divideArr([2, 2, 3, 3, 2, 2]);

console.log(ans1);
console.log(ans2);
console.log(ans3);

/* Output:
            [ [ 1, 3, 2 ], [ 4, 3, 2 ] ]
            [ [ 2, 1 ], [ 2, 1 ] ]
            []
           */
