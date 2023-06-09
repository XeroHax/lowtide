const assertEqual = function(actual, expected) {
  actual === expected
    ? console.log(`😃 Assertion Passed: ${actual} === ${expected}`)
    : console.log(`😢 Assertion Failed: ${actual} !== ${expected}`);
};

const head = function(arr) {
  return arr[0];
};

assertEqual(head([]), undefined);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
