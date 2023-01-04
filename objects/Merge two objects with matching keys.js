// Write a function that takes two objects as arguments. Unfortunately, the property 'b' in the second object has the wrong key. It should be named 'd' instead. Merge both objects and correct the wrong property name. Return the resulting object. It should have the properties 'a', 'b', 'c', 'd', and 'e'

// destructuring function
const rename = ({ b: d, ...rest }) => ({ d, ...rest })

function myFunction(a, b) {
    // destructuring function
    const b_rename = rename(b)
    const unsorted_obj = Object.assign({}, a, b_rename)

    return Object.fromEntries(Object.entries(unsorted_obj).sort())

}

console.log(myFunction({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 }))
console.log(myFunction({ a: 5, b: 4 }, { c: 3, b: 1, e: 2 }))