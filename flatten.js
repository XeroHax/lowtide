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

// this handles infinitely deep nesting without the need for recursion by simply using splice and reducing the counter when you do

const flatten = function(nestedArr) {
  const result = nestedArr;
  for (let i = 0; i < result.length; i++) {
    if (Array.isArray(result[i])) {
      result.splice(i, 1, ...result[i]);
      i--;
    }
  }
  return result;
};
flatten([[2, [3, [7, 19]]], 4, ["why"]]);

assertArraysEqual(flatten([[2, [3, [7, 19]]], 4, ["why"]]), [
  2,
  3,
  7,
  19,
  4,
  "why",
]);
