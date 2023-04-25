const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  eqArrays(arr1, arr2)
    ? console.log("😃 Assertion Passed: the arrays are equal.")
    : console.log("😢 Assertion Failed: the arrays are not the same.");
};



const letterPositions = function(sentence) {
  const results = {};

  // looping through the sentence the regular expression was used to test if the character is a letter and skips any non-letters.
  for (let i = 0; i < sentence.length; i++) {
    if (/[a-z]/i.test(sentence[i])) {
      if (sentence[i] in results) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
  }

  return results;
};

const testArr = letterPositions("lighthouse in the house");

assertArraysEqual(testArr.i, [1, 11]);
assertArraysEqual(testArr.h, [3, 5, 15, 18]);
assertArraysEqual(testArr.u, [7, 20]);
assertArraysEqual(testArr.n, [12]);

