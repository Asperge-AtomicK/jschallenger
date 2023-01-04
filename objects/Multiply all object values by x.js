// Write a function that takes an object (a) and a number (b) as arguments. Multiply all values of 'a' by 'b'. Return the resulting object.

function myFunction(a, b) {
    const entries_array = Object.entries(a).map(value => [value[0], value[1] * b])
    return Object.fromEntries(entries_array)
}

console.log(myFunction({ a: 1, b: 2, c: 3 }, 3))
console.log(myFunction({ j: 9, i: 2, x: 3, z: 4 }, 10))
console.log(myFunction({ w: 15, x: 22, y: 13 }, 6))