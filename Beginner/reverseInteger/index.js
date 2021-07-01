/* CHALLENGE
Given an integer, return an integer that has the reverse ordering of that which was received. E.g reverseInteger(-123) // should return -321
*/

function reverseInteger(num) {
  const revNum = parseInt(String(num).split("").reverse().join(""));
  return revNum * Math.sign(num);
}

console.log(reverseInteger(-153)); // -321
console.log(reverseInteger(900, 9)); // 9
