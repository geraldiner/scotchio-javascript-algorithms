/* Given an array of two numbers, return the cummulative sum of the two numbers and all the numbers between them. rangeSum([1,9]) return 1+2+3+4+5+6+7+8+9

Empty array [] => error? must be array with two numbers
Missing args [1] => error? must be array with two numbers?
Same args [4,4] => 4 = 4
Negative args [-1,5] => 2+3+4+5 = 14
Avg case [1,9] = 1+2+3+4+5+6+7+8+9 = 45

*/

/* function rangeSum(arr) {
  if (arr.length < 2) {
    throw new Error("Array must have two numbers");
  }
  const [min, max] = [...arr];
  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
} */

function rangeSum(arr) {
  if (arr.length < 2) {
    throw new Error("Array must have two numbers");
  }
  return ((arr[1] - arr[0] + 1) * (arr[0] + arr[1])) / 2;
}

// console.log(rangeSum([])); // => error? must be array with two numbers
// console.log(rangeSum([1])); // => error? must be array with two numbers?
console.log(rangeSum([4, 4])); // => 4 = 4
console.log(rangeSum([-1, 5])); // => 2+3+4+5 = 14
console.log(rangeSum([1, 9])); // = 1+2+3+4+5+6+7+8+9 = 45
