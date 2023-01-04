// Write a function that takes an array of strings as argument. Group those strings by their first letter. Return an object that contains properties with keys representing first letters. The values should be arrays of strings containing only the corresponding strings.

function myFunction(array) {
    keys = array.map(value => value = value[0].toLowerCase()).filter((value, index, arr) => arr.indexOf(value) === index)
    let obj = {}
    for (const key of keys) {
        obj[key] = []
    }
    
    array.forEach(value => {
        for (const key of keys)
        {
            if (value.charAt(0).toLowerCase() === key)
            {
                obj[key].push(value)
            }
        }
    })
    
    return obj
}

console.log(myFunction(['Alf', 'Alice', 'Ben'])) //  return { a: ['Alf', 'Alice'], b: ['Ben']}
console.log(myFunction(['Light', 'Slice', 'Aspect', 'Mathelogical', 'Brave', 'Requiem', 'Crash', 'Virus', 'Dynamo', 'Cycle']))