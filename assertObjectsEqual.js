const eqObjects = function (object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (let key in object1) {
      if (Array.isArray(object1[key])) {
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
      } else if (!(key in object2) || object1[key] !== object2[key]) {
        return false;
      }
    }
  } else {
    return false;
  }

  return true;
};

const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect;
  eqObjects(actual, expected)
    ? console.log(`💚 Assertion Passed: the object ${inspect(actual)} is the same as ${inspect(expected)}.`)
    : console.log(`💔 Assertion Failed: the object ${inspect(actual)} is not the same as ${inspect(expected)}.`);
};

assertObjectsEqual({name: 'Roland', age: 52}, {age: 52, name: 'Roland', condition: 'used'});