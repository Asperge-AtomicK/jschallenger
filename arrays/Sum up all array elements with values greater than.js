// Write a function that takes an array (a) and a number (b) as arguments. Sum up all array elements with a value greater than b. Return the sum
function myFunction(a, b) {
    console.log(a.filter(value => value > b))
    return a.filter(value => value > b).reduce((accumulator, value) => accumulator + value)
}

console.log(myFunction([-10, 22, 333, 42, -11, 5, 22, 41, 42], 6)) // 502
console.log(myFunction([863, 45, 13, -390, 41, 83, -6, 41, 50], 51)) // 946