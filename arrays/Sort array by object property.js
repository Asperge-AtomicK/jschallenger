// Write a function that takes an array of objects as argument. Sort the array by property b in ascending order. Return the sorted array
function myFunction(array) {
    return array.sort(function (a, b) {
        return a.b - b.b
    })
}

console.log(myFunction([{ a: 1, b: 2 }, { a: 5, b: 4 }]))
console.log(myFunction([{ a: 2, b: 10 }, { a: 5, b: 4 }]))
console.log(myFunction([{ a: 1, b: 7 }, { a: 2, b: 1 }]))
console.log(myFunction([{ a: 1, b: 7 }, { a: 2, b: 1 }, { a: 7, b: 9 }]))