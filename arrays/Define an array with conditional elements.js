// Write a function that takes an array with arbitrary elements and a number as arguments. Return a new array, the first element should be either the given number itself. or zero if the number is smaller than 6. The other elements should be the elements of the original array. Try not to mutate the original array

/**
 * @param {Array<number>} array
 * @param {number} n
 */
function myFunction(array, n) {
    // il faut remplacer le premier ou en ajouter un devant?

    // autre solution 1:
    // const clone = array.slice(0)
    // clone.unshift(n < 6 ? 0 : n)
    // return clone

    // autre solution 2:
    return [n < 6 ? 0 : n, ...array]


    // let result = [array[0] === n ? n : array[0] <= 6 ? 0 : 0]
    // // result.push(array.slice(1).forEach(value => result.push(value)))
    // // result.pop()
    // tu push un void puis tu le retire, il faut juste faire:
    // array.slice(1).forEach(value => result.push(value))
    // return result
}

console.log(myFunction([583, -961, -785, -676, 214, -550, 456, 90, -715, 118], -515))
console.log(myFunction([-6, -7, 9, 4, 1], 9))
console.log(myFunction([10, 4, -3, 2, -4], 10))
console.log(myFunction([10, 4, -3, 2, -4], -10))