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

// function chunkArray(array, size) {
//     // initialize result array to be returned
//     let result = []
//     // traverse the given array
//     for (value of array) {
//         // chunk array to be filled
//         let lastArray = result[result.length - 1]
//         // check if result is empty or the chunk array is the right size
//         if (!lastArray || lastArray.length == size) {
//             result.push([value])
//         } else {
//             // otherwise push the value into the lastArray (builds it up to the chunk size)
//             lastArray.push(value)
//         }
//     }
//     return result
// }

// function chunkArray(array, size) {
//     // initialize result array
//     let result = []
//     // make a copy of the original array so it isn't changed
//     let arrayCopy = [...array]
//     // go through the array until the end
//     while (arrayCopy.length > 0) {
//         // push chunks of the arrayCopy in the size specified
//         result.push(arrayCopy.splice(0, size))
//     }
//     return result
// }

function chunkArray(array, size) {
    // initialize result array
    let result = []
    // traverse array and push slices of the array to the result array
    // we can do this because slice doesn't affect the original array
    for (let i = 0; i < array.length; i += size) {
        let chunk = array.slice(i, i + size)
        result.push(chunk)
    }
    return result
}

// function chunkArray(array, size) {
//     // if the array is smaller than the given size, return the array in its own chunk
//     if (array.length <= size) {
//         return [array]
//     }
//     // otherwise, recursion
//     // the first element is the first chunk
//     // the rest is filled with calling chunkArray on a sliced array from the size, with the same size paramter
//     // eventually we reach the edge case above where the array is less than or equal to the size and so we return that chunk
//     return [array.slice(0, size), ...chunkArray(array.slice(size), size)]
// }

console.log(chunkArray([1, 2, 3, 12, 13], 8))

module.exports = chunkArray