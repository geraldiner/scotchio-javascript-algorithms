/*
Return the lowest index at which a value (second argument) should be
inserted into an array (first argument) once it has been sorted. The
returned value should be a number. E.g

whereIBelong([1,2,3,4], 1.5) // should return 1 because it is greater
than 1(index 0), but less than 2(index 1).
*/

/* function whereIBelong(arr, num) {
  arr.sort((a, b) => a - b);
  if (arr.length == 0 || num < arr[0]) {
    return 0;
  }
  for (let i = 0; i < arr.length; i++) {
    if (num > arr[i] && num < arr[i + 1]) {
      return i + 1;
    }
  }
  return arr.length;
} */

function whereIBelong(arr, num) {
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num) {
      return i;
    }
  }
  return arr.length;
}

/* function whereIBelong(arr, num) {
  var counter = 0;
  for (i = 0; i < arr.length; i++) {
    if (num > arr[i]) {
      counter++;
    }
  }
  return counter;
} */

// console.log(whereIBelong([], 10)); // 0
// console.log(whereIBelong([1, 2, 3, 4], 1.5)); // 1
// console.log(whereIBelong([4, 1, 7, 5, 3], 6)); // 4
// console.log(whereIBelong([1, 2, 3, 4], 5)); // 5

module.exports = whereIBelong;
