const assertEqual = function (actual, expected) {
  actual === expected
    ? console.log(`😃 Assertion Passed: ${actual} === ${expected}`)
    : console.log(`😢 Assertion Failed: ${actual} !== ${expected}`);
};
const findKey = function (obj, callBack) {
  for (const key in obj) {
    if (callBack(obj[key])) { 
      return key;
    }
  }
};

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma"); // => "noma"

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

assertEqual(findKey(bestTVShowsByGenre, e => e === "The Wire"), "drama");
assertEqual(
  findKey(bestTVShowsByGenre, (e) => e === "That '70s Show"),
  undefined
);