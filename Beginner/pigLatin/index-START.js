// function pigLatin(str) {
//   // convert string to lowercase
//   str = str.toLowerCase()
//   // array of vowels to check for
//   const vowels = ['a', 'e', 'i', 'o', 'u']
//   // initialize vowel index to 0
//   let vowelIndex = 0
//   if (vowels.includes(str[0])) {
//     return str + 'way'
//   } else {
//     // if the first letter isn't a vowel
//     for (let char of str) {
//       // check if the char iis a vowel
//       if (vowels.includes(char)) {
//         // if it is, set the vowelIndex to the index of the char and break out
//         vowelIndex = str.indexOf(char)
//         break
//       }
//     }
//     // put together the 
//     return str.slice(vowelIndex) + str.slice(0, vowelIndex) + "ay"
//   }
// }

function pigLatin(str) {
  return str
    .replace(/^([aeiouy])(._)/, '$1$2way')
    .replace(/^(_[_^aeiouy]+)(._)/, '$2$1ay')
}

console.log(pigLatin('apple'))