// Write a function that takes an array as argument. It should return true if all elements in the array are equal. It should return false otherwise.
function myFunction(a) {
    return a.every(value => value === a[0])
}

console.log(myFunction([true, true, true, true]))
console.log(myFunction(['test', 'test', 'test']))
console.log(myFunction([1, 1, 1, 2]))
console.log(myFunction(['10', 10, 10, 10]))