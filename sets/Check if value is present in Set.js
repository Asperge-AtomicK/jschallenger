// Write a function that takes a Set and a value as arguments. Check if the value is present in the Set

function myFunction(a, b) {
    return a.has(b)
}

console.log(myFunction(new Set([1, 2, 3]), 2))
console.log(myFunction(new Set([123]), 2))
console.log(myFunction(new Set(['1', '2', '3']), '2'))
console.log(myFunction(new Set('123'), '2'))