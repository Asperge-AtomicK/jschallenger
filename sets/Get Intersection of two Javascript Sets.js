// Write a function that takes two sets (a and b) as arguments. Get the intersection of the sets. In other words, return a set containing all elements that are both in a as well as b

function myFunction(a, b) {
    /*
    // solution 1
    let set_result = new Set()
    for (const value of a) {
      if (b.has(value)) {
        set_result.add(value)
      }
    }
    return set_result
    */
    // solution 2
    // console.log([...a])
    return new Set([...a].filter(value => b.has(value)))
}

console.log(myFunction(new Set([1, 2, 3]), new Set([1, 6, 8, 3])))
console.log(myFunction(new Set('12345'), new Set('357')))
console.log(myFunction(new Set([1, 2, 3, 4]), new Set([3, 4, 5, 6])))
console.log(myFunction(new Set(['a', 'b', 'c']), new Set(['a', 'b', 'd', 'e'])))