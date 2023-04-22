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

assertArraysEqual([1, 5, 3], [1, 2, 3]);