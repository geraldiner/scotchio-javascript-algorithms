/* CHALLENGE
Given a string of text, return true or false indicating whether or not the text is a palindrome.
e.g palindromeChecker('racecar') // will return true
*/



// Chaining
// function palindromeChecker(text) {
//     let palindrome = text.toLowerCase().split('').reverse().join('')
//     return text.toLowerCase() == palindrome
// }

// loop and compare chars
function palindromeChecker(text) {
    let half = Math.floor(text.length / 2)
    for (let i = 0; i <= half; i++) {
        if (text[i] != text[text.length - 1 - i]) {
            return false
        }
    }
    return true
}

// shorter looping -- but it does every letter
// function palindromeChecker(text) {
//     let charArr = [...text]
//     let result = charArr.every((letter, index) => {
//         return letter === charArr[charArr.length - 1 - index]
//     })
//     return result
// }

console.log(palindromeChecker('racecar'))


module.exports = palindromeChecker;