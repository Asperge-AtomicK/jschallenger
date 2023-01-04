// Write a function that takes an array (a) and a value (b) as argument. The function should remove all elements equal to 'b' from the array. Return the filtered array.

function myFunction(a, b) {
    return a.filter(value => value !== b)
}

console.log(myFunction([1, 2, 3], 2))
console.log(myFunction([1, 2, '2'], '2'))
console.log(myFunction([false, '2', 1], false))
console.log(myFunction([1, 2, '2', 1], 1))