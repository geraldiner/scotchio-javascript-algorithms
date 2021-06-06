/* CHALLENGE
Given a sentence containing two or more words, 
return the equivalent of the sentence when capitalised. E.g
  capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!' 
*/



// forEach
// function capSentence(text) {
//   let words = text.toLowerCase().split(' ')
//   let newWords = []
//   words.forEach((word) => {
//     word = word[0].toUpperCase() + word.slice(1)
//     newWords.push(word)
//   })
//   return newWords.join(' ')
// }

// map and slice
function capSentence(text) {
  let words = text.toLowerCase().split(' ')
  let capWords = words.map((word) => {
    return word[0].toUpperCase() + word.slice(1)
  })
  return capWords.join(' ')
}

// map and replace
// function capSentence(text) {
//   let words = text.toLowerCase().split(' ')
//   let capWords = words.map((word) => {
//     return word.replace(word[0], word[0].toUpperCase())
//   })
//   return capWords.join(' ')
// }

console.log(capSentence('the tales of scotch!'))

module.exports = capSentence