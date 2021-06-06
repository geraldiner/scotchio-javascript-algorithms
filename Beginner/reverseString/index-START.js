/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/


// Chaining
// function reverseString(text) {
//     return text.split('').reverse().join('')
// }

// Chaining
// function reverseString(text) {
//     return [...text].reverse().join('')
// }

// Chaining
// function reverseString(text) {
//     return Array.from(text).reverse().join('')
// }

// For-loop
// function reverseString(text) {
//     let result = ''
//     for (let i = text.length - 1; i >= 0; i--) {
//         result += text[i]
//     }
//     return result
// }

// Recursion
// function reverseString(text) {
//     if (text === "") {
//         return ""
//     } else {
//         return reverseString(text.substr(1)) + text[0]
//     }
// }

// Reduce
function reverseString(text) {
    return text.split('').reduce((acc, char) => char + acc, '')
}

console.log(reverseString('algorithms'))

/*
Speed
1. .reduce()
2. for-loop
3. chaining
*/

module.exports = reverseString