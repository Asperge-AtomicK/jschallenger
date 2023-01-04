// Write a function that takes an object as argument containing properties with personal information. Extract firstName, lastName, size, and weight if available. If size or weight is given transform the value to a string. Attach the unit cm to the size. Attach the unit kg to the weight. Return a new object with all available properties that we are interested in

function myFunction(obj) {
    const data_filtered = Object.entries(obj).filter(([key, value]) => value !== undefined)
    const obj_filtered = Object.fromEntries(data_filtered)
    if (obj_filtered.size) obj_filtered.size = `${obj_filtered.size} cm`
    if (obj_filtered.weight) obj_filtered.weight = `${obj_filtered.weight} kg`

    return obj_filtered
}

console.log(myFunction({ firstName: 'Angela', lastName: 'Ellis', size: 165, weight: 5 }))
console.log(myFunction({ firstName: undefined, lastName: 'Clarke', size: 203, weight: 85 }))
console.log(myFunction({ firstName: 'Reubens', lastName: 'Williams', size: undefined, weight: undefined }))