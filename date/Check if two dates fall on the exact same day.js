// Write a function that takes two date instances as argument. It should return true if they fall on the exact same day. It should return false otherwise.

function myFunction(a, b) {
    return a.getDay() === b.getDay() ? true : false
}

console.log(myFunction(new Date('2000/01/01'), new Date('2000/01/01')))
console.log(myFunction(new Date('2000/01/01'), new Date('2000/01/02')))
console.log(myFunction(new Date('2001/01/01'), new Date('2000/01/01')))
console.log(myFunction(new Date('2000/11/01'), new Date('2000/01/01')))