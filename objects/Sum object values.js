// Write a function that takes an object (a) as argument. Return the sum of all object values.
function myFunction(a) {
    return typeof a === "object" ? Object.values(a).reduce((accumulator, value) => accumulator + value) : undefined
}

console.log(myFunction({ a: 1, b: 2, c: 3 }))
console.log(myFunction({ j: 9, i: 2, x: 3, z: 4 }))
console.log(myFunction({ w: 15, x: 22, y: 13 }))
console.log(myFunction(15))