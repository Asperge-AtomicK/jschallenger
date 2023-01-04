// Write a function that takes an array of numbers as argument. It should return the sum of the numbers.
/*
function myFunction(a) {
    let accumulator = 0
    for (let i = 0; i < a.length; i++) {
        accumulator += a[i]
    }

    return accumulator
}
*/
function myFunction(a) {
    return a.reduce((accumulator, value) => accumulator + value)
}


console.log(myFunction([10, 100, 40]))
console.log(myFunction([10, 100, 1000, 1]))
console.log(myFunction([-50, 0, 50, 200]))