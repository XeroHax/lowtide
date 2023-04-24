const assertEqual = function(actual, expected) {
  actual === expected
    ? console.log(`😃 Assertion Passed: ${actual} === ${expected}`)
    : console.log(`😢 Assertion Failed: ${actual} !== ${expected}`);
};

const countOnly = function(items, itemsToCount) {
  const count = {};

  for (let itemKey in itemsToCount) {
    if (itemsToCount[itemKey]) {
      let counter = 0;
      for (let elem of items) {
        if (itemKey === elem) {
          counter++;
        }
      }
      if (counter > 0) {
        count[itemKey] = counter;
      }
    }
  }
  return count;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
