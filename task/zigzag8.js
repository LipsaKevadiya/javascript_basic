function isZigzag(numbers) {
  const result = [];

  // loop iterates up to the second-to-last element of the array
  for (let i = 0; i < numbers.length - 2; i++) {
    const a = numbers[i];

    const b = numbers[i + 1];

    const c = numbers[i + 2];

    // Check if the triple is a zigzag , a < b > c or a > b < c.
    if ((a < b && b > c) || (a > b && b < c)) {
      result.push(1);
    } else {
      result.push(0);
    }
  }

  return result;
}

const numbers1 = [1, 2, 1, 3, 4];
console.log(isZigzag(numbers1));

const numbers2 = [1, 2, 3, 4];
console.log(isZigzag(numbers2));

const numbers3 = [1000000000, 1000000000, 1000000000];
console.log(isZigzag(numbers3));

/* o/p:   [1, 1, 0]
          [0, 0]
          [0]       */
