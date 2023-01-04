// Write a function that takes two strings (a and b) as arguments. Create an object that has a property with key 'a' and a value of 'b'. Return the object.

function myFunction(a, b) {
    // es6 create dynamic variable key in the object declaration
    return { [a]: b }
}

console.log(myFunction('a', 'b'))
console.log(myFunction('z', 'x'))
console.log(myFunction('b', 'w'))