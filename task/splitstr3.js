function countWaysToSplit(s) {
  const n = s.length;
  let count = 0; // to keep track of the number of valid splits

  for (let i = 1; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const a = s.slice(0, i);
      const b = s.slice(i, j);
      const c = s.slice(j);

      if (a + b !== b + c && b + c !== c + a && c + a !== a + b) {
        count++;
      }
    }
  }
  return count;
}

const inputString = "xzxzx";
const ways = countWaysToSplit(inputString);
console.log(`Number of ways to split '${inputString}': ${ways}`);

//Output: Number of ways to split 'xzxzx': 5
