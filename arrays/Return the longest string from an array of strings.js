// Write a function that takes an array of strings as argument. Return the longest string
function myFunction(a) {
    return a.reduce((accumulator, value) => accumulator.length > value.length ? accumulator : value)
}

console.log(myFunction(['help', 'me']))
console.log(myFunction(['I', 'need', 'candy']))