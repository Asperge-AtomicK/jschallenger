// Write a function that takes as argument a date instance (a) and a number (b). It should add b days to a and return the number of milliseconds since January 1, 1970, 00:00:00 UTC.

function myFunction(a, b) {
    console.log(new Date(a.getTime() + (b * 24 * 3600 * 1000)))
    return a.getTime() + (b * 24 * 3600 * 1000)
}

console.log(myFunction(new Date('2000/01/01 08:00:00'), 20))
console.log(myFunction(new Date('2000/01/01 08:45:00'), 5))
console.log(myFunction(new Date('2000/01/01 08:00:00'), 36))