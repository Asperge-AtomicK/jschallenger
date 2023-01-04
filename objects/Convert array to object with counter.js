// Write a function that takes an array of objects and a string as arguments. Add a property with key 'continent' and value equal to the string to each of the objects. Return the new array of objects. Tipp: try not to mutate the original array

function myFunction(array) {
    const count = {}
    array.forEach(value => {
        if (count[value]) {
            ++count[value]
        }
        else {
            count[value] = 1
        }
    })

    return count
}

console.log(myFunction([922, 1609, 2181, 2215, 3831, 4020, 4316, 4577]))
console.log(myFunction([463, 1111, 2353, 463, 2763, 3137, 1111, 4304]))
console.log(myFunction([30, 436, 471, 1574, 471, 2054, 471, 4441]))