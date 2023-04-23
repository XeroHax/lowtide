const assertArraysEqual = function(arr1, arr2) {
  eqArrays(arr1, arr2)
    ? console.log("😃 Assertion Passed: the arrays are equal.")
    : console.log("😢 Assertion Failed: the arrays are not the same.");
};

const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const middle = function(arr) {
  const start = Math.floor((arr.length - 1) / 2);
  let even = 0;

  if (arr.length % 2 === 0) {
    even = 1;
  }
  if (arr.length > 2) {
    return arr.slice(start, start + 1 + even);
  } else {
    return [];
  }
};

assertArraysEqual(middle([1, 2, 3]), [2]);
