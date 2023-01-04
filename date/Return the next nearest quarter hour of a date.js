// Write a function that takes a Date instance as argument. It should return the next nearest quarter hour in minutes. For example, if the given date has the time 10:01 the function should return 15

function myFunction(a) {
    const minutes = a.getMinutes()
    if (minutes > 0 && minutes <= 15) return 15
    else if (minutes > 15 && minutes <= 30) return 30
    else if (minutes > 30 && minutes <= 45) return 45
    else return 0
}

console.log(myFunction(new Date('2003/01/15 16:38:15')))
console.log(myFunction(new Date('2017/06/19 04:06:59')))
console.log(myFunction(new Date('2008/10/31 13:15:23')))
console.log(myFunction(new Date('2008/10/31 06:59:23')))
console.log(myFunction(new Date('2008/10/31 17:25:23')))