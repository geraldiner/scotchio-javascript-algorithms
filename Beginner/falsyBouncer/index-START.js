/*
Given an array, remove all falsy values from the array
and return an array of only truthy values.

E.g  falsyBouncer([1, 0, null, '', 5]) // should return [1,5]
*/

// function falsyBouncer(array) {
//   return array.filter(Boolean);
// }

function falsyBouncer(array) {
  return array.filter((value) => Boolean(value));
}

console.log(falsyBouncer([1, 0, null, "", 5])); // [1,5]

module.exports = falsyBouncer;
