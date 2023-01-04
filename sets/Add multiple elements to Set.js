// Write a function that takes a Set and an array as arguments. If not already existing, add each element in the array to the Set. Return the modified Set

function myFunction(set, array) {
    // array.forEach(value => set.add(value))
    return new Set([...set], [...array])
}

console.log(myFunction(new Set([1, 2, 3]), [1, 6, 8, 3]))
console.log(myFunction(new Set('12345'), ['3', '5', '7']))