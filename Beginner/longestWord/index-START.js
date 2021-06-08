/* 
Given a sentence, return the longest word in the string. 
E.g longestWord('Top Shelf Web Development Training on Scotch') should return 'Development'

Approach
    1. Split the text into words
    2. Initialize longestWord variable to keep track
    2. Check each word to find it's length, use Math.max to compare to the previous
*/


function longestWord(text) {
    let words = text.split(' ')
    let longestWord = ''
    let longestWordLength = 0
    for (const word of words) {
        if (word.length > longestWordLength) {
            longestWordLength = word.length
            longestWord = word
        }
    }
    return longestWord
}

console.log(longestWord('Top Shelf Web Development Training on Scotch'))

module.exports = longestWord