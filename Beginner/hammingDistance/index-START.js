/* CHALLENGE
Given two strings of equal length, calculate and return the the hamming distance.
E.g hammingDistance('rover', 'river') // should return 1
*/

// For-loop
function hammingDistance(stringA, stringB) {
    // Code goes here
    let counter = 0;
    if (stringA.length === stringB.length) {
        for (let i = 0; i < stringA.length; i++) {
            if (stringA.toLowerCase()[i] !== stringB.toLowerCase()[i]) {
                counter++
            }
        }
        return counter
    } else {
        throw new Error('Strings do not have equal length')
    }

}


console.log(hammingDistance('rover', 'river'))


module.exports = hammingDistance