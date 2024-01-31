function mergeStr(s1, s2) {
  // Count occurrences of characters in each string

  const countMapS1 = count(s1);
  console.log(countMapS1);
  const countMapS2 = count(s2);
  console.log(countMapS2);

  // Merge strings based on the special merge function
  let result = ""; // to store the merged result.
  let i = 0, //iterating through strings s1 and s2.
    j = 0;

  while (i < s1.length || j < s2.length) {
    const charS1 = i < s1.length ? s1[i] : ""; //assigns char at the current index i in s1 to charS1
    const charS2 = j < s2.length ? s2[j] : ""; //assigns char at the current index j in s2 to charS2

    // Compare characters based on occurrences or lexicographical order
    if (
      countMapS1[charS1] < countMapS2[charS2] ||
      (countMapS1[charS1] === countMapS2[charS2] && charS1 < charS2) //  last part checks the lexicographical order
    ) {
      result += charS1;
      i++;
    } else {
      result += charS2;
      j++;
    }
  }

  return result;
}

//to count occurrences of characters in a string s1,s2
function count(str) {
  const countMap = {}; //empty object

  for (const char of str) {
    countMap[char] = (countMap[char] || 0) + 1;
  }

  return countMap;
}

const s1 = "dce";
const s2 = "cccbd";
console.log(mergeStr(s1, s2));

const s3 = "super";
const s4 = "tower";
console.log(mergeStr(s3, s4));

/*o/p:  { d: 1, c: 1, e: 1 }
        { c: 3, b: 1, d: 1 }
        dcecccbd
        { s: 1, u: 1, p: 1, e: 1, r: 1 }
        { t: 1, o: 1, w: 1, e: 1, r: 1 }
        stouperwer   */
