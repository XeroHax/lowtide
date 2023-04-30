const eqArrays = function (arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function (arr1, arr2) {
  eqArrays(arr1, arr2)
    ? console.log("😃 Assertion Passed: the arrays are equal.")
    : console.log("😢 Assertion Failed: the arrays are not the same.");
};

const words = ["ground", "control", "to", "major", "tom"];

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, (word) => word[0]);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);

