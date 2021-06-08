/* 
Given a two strings, write an algorithm to check if they are anagrams
of each other. Return true if the pass the test and false if they
don't. E.g
    isAnagram('silent', 'listen') // should return true
*/



// function isAnagram(stringA, stringB) {
//     // Code goes here
//     if (stringA.length != stringB.length) {
//         return false
//     } else {
//         for (let i = 0; i < stringA.length; i++) {
//             if (!stringB.includes(stringA[i])) {
//                 return false
//             }
//         }
//     }
//     return true
// }

// sanitize before compare
// function isAnagram(stringA, stringB) {
//     // change strings to lowercase, replace nonalpha characters with ''
//     const sanitizeString = function (str) {
//         return str.toLowerCase().replace(/[^a-z\d]/g, '').split('').sort().join('');
//     }
//     return sanitizeString(stringA) == sanitizeString(stringB)
// }

// character map comparison
function isAnagram(stringA, stringB) {

    const createCharMap = function (text) {
        let charMap = {}

        for (let char of text) {
            if (charMap.hasOwnProperty(char)) {
                charMap[char]++
            } else {
                charMap[char] = 1
            }
        }

        return charMap
    }

    if (stringA.length === stringB.length) {
        let stringAMap = createCharMap(stringA)
        let stringBMap = createCharMap(stringB)
        for (let char in stringAMap) {
            if (stringAMap[char] !== stringBMap[char]) {
                return false
            }
        }
        return true
    } else {
        return false
    }
}

module.exports = isAnagram