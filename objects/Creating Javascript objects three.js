// Write a function that takes two arrays (a and b) as arguments. Create an object that has properties with keys 'a' and corresponding values 'b'. Return the object.
function myFunction(a, b) {
    /*
    // solution 1
    const array = a.map((value, index) => [value, b[index]])
    let obj = {}
    for (let i = 0; i < array.length; i++) {
        Object.assign(obj, { [array[i][0]]: array[i][1] })
    }
    */

    // solution 2
    // return Object.assign({}, a.map((value, index) => [value, b[index]]))

    // solution 3 
    const obj = {}
    a.forEach((key, index) => (obj[key] = b[index]))
    return obj
}

console.log(myFunction(['a', 'b', 'c'], [1, 2, 3]))
console.log(myFunction(['w', 'x', 'y', 'z'], [10, 9, 5, 2]))
console.log(myFunction([1, 'b'], ['a', 2]))