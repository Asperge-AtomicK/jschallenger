// Write a function that takes two date instances as argument. It should return the number of days that lies between those dates.

function myFunction(a, b) {
    return Math.abs((b.getTime() - a.getTime()) / (1000 * 3600 * 24))
}

console.log(myFunction(new Date('2020-06-01'), new Date('2020-06-11')))
console.log(myFunction(new Date('2000-01-01'), new Date('2020-06-01')))