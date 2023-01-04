// Sounds easy, but you need to know the trick. Write a function that takes two date instances as arguments. It should return true if the dates are equal. It should return false otherwise.

function myFunction(a, b) {
    return a.getTime() === b.getTime()
}

console.log(myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00')))
console.log(myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:00:00')))
console.log(myFunction(new Date('1969/07/20 00:20:18'), new Date('1869/07/20 00:20:18')))