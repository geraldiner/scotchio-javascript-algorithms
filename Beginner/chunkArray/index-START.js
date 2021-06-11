/* 
Given an array and a chunk size, divide the array into many sub-arrays where each sub-array has the specified length. E.g chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 5)
// should return [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13]]
*/

// function chunkArray(array, size) {
//     let newArr = []
//     let temp = []
//     for (let i = 0; i < array.length; i++) {
//         if ((i + 1) % size == 0) {
//             temp.push(array[i])
//             newArr.push(temp)
//             temp = []
//         } else {
//             temp.push(array[i])
//         }
//     }
//     newArr.push(temp)
//     return newArr
// }

function chunkArray(array, size) {
    let result = []
    for (value of array) {
        let lastArray = result[result.length - 1]
        if (!lastArray || lastArray.length == size) {
            result.push([value])
        } else {
            lastArray.push(value)
        }
    }
    return result
}

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 5))

module.exports = chunkArray