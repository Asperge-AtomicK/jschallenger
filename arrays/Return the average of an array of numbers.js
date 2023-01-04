// Write a function that takes an array of numbers as argument. It should return the average of the numbers.
function myFunction(a) {
    return a.reduce((accumulator, value) => accumulator + value) / a.length
}

console.log(myFunction([10, 100, 40]))
console.log(myFunction([10, 100, 1000]))
console.log(myFunction([-50, 0, 50, 200]))