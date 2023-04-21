const assertEqual = function(actual, expected) {
  actual === expected
    ? console.log(`😃 Assertion Passed: ${actual} === ${expected}`)
    : console.log(`😢 Assertion Failed: ${actual} !== ${expected}`);
};

// test code
assertEqual("Bootcamp", "Bootcamp");
assertEqual(1, 2);
