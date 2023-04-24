const assertEqual = function (actual, expected) {
  actual === expected
    ? console.log(`😃 Assertion Passed: ${actual} === ${expected}`)
    : console.log(`😢 Assertion Failed: ${actual} !== ${expected}`);
};

const countLetters = function (str) {
  // stripped any non-letters from the string.
  // .match returns an array, .join converts it back to a string
  let trimmed = str.match(/[a-z]/gi).join("");

  // will return an object of the counts
  const count = {};

  // looping through trimmed I create a new regex for each letter and .match returns an array with each occurrence, .length is the count. I assign that count to the count object with the letter as the key.
  for (let l of trimmed) {
    if (!count[l]) {
      count[l] = 1;
    } else {
      count[l]++;
    }
  }
  return count;
};

console.log(countLetters("lighthouse in the house"));
