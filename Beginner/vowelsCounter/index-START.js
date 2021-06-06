/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/

// For-loop
// function vowelsCounter(text) {
//   const vowels = ['a', 'e', 'i', 'o', 'u']
//   let vowelCounter = 0;
//   for (let i = 0; i < text.length; i++) {
//     if (vowels.includes(text[i].toLowerCase())) {
//       vowelCounter++
//     }
//   }
//   return vowelCounter
// }

// Regex
function vowelsCounter(text) {
  let vowelsFound = text.match(/[aeiou]/gi)
  return vowelsFound ? vowelsFound.length : 0
}

module.exports = vowelsCounter;
