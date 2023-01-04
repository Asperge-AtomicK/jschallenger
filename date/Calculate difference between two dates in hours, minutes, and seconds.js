// This is a more difficult challenge. Write a function that takes two date instances as arguments. It should return an object with the properties 'hrs', 'min', and 'sec'. The corresponding values should display the absolute difference between the two dates in hours, minutes, and seconds.

function myFunction(a, b) {
    const delta = {}
    // delta in seconds
    let delta_secs = Math.abs(b.getTime() - a.getTime()) / 1000
    // subtract days
    delta.days = Math.floor(delta_secs / (3600 * 24))
    delta_secs -= delta.days * (3600 * 24)
    // substract hours
    delta.hours = Math.floor(delta_secs / 3600)
    delta_secs -= delta.hours * 3600
    // substract minutes
    delta.min = Math.floor(delta_secs / 60)
    delta_secs -= delta.min
    // seconds
    delta.sec = delta_secs

    return delta
}

console.log(myFunction(new Date('2000/01/01 08:00:00'), new Date('2003/01/15 16:38:15')))
console.log(myFunction(new Date('2000/01/01 08:45:00'), new Date('2017/06/19 04:06:59')))
console.log(myFunction(new Date('2004/09/11 10:25:45'), new Date('2008/10/31 13:15:23')))