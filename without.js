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

const without = function(source, itemsToRemove) {
  // using recursion I have two termination cases, an empty array and an array with one item, otherwise I want to recursively call the function with the updated source array and the updated items array, the latter being one element shorter

  if (itemsToRemove.length === 0) {
    return source;
  } else if (itemsToRemove.length === 1) {
    return source.filter((e) => e !== itemsToRemove[0]);
  } else {
    return without(
      source.filter((e) => e !== itemsToRemove[0]),
      itemsToRemove.slice(1)
    );
  }
};
const testSource = [1, 2, 3, 4];
const testItems = ["3", 2];
const testResult = [1, 3, 4];

assertArraysEqual(without(testSource, testItems), testResult);

console.log(testItems);
console.log(testSource);

