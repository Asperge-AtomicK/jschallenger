// Write a function that takes an array (a) and a value (n) as arguments. Save every nth element in a new array. Return the new array

/**
 * @param {Array<number>} array
 * @param {number} n
 */
function myFunction(array, n) {
    return array
        .filter((_, i) => (i + 1) % n === 0)

    // let result = []
    // for (let i = 0; i < array.length; i += n)
    // {
    //     result.push(array[i])
    // }
    // return result
}

console.log(myFunction([583, -961, -785, -676, 214, -550, 456, 90, -715, 118], 4))
console.log(myFunction([-6, -7, 9, 4, 1], 4))
console.log(myFunction([10, 4, -3, 2, -4, 6, -3, 5, -8], 3))