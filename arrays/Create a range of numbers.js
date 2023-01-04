// Write a function that takes two numbers (min and max) as arguments. Return an array of numbers in the range min to max
function myFunction(min, max) {
    let array = []
    let number = min
    for (let i = min; i <= max; i++) {
        array.push(number++)
    }
    return array
}

console.log(myFunction(1, 5))
console.log(myFunction(0, 3)) 