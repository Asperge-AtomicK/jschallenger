//Write a function that takes an array of numbers as argument. It should return an array with the numbers sorted in descending order.
function myFunction(a) {
    return a.sort().reverse()
}

console.log(myFunction([1, 3, 2]))
console.log(myFunction([4, 2, 3, 1]))