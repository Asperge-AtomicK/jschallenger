// Write a function that takes an array of objects and a string as arguments. Add a property with key 'continent' and value equal to the string to each of the objects. Return the new array of objects. Tipp: try not to mutate the original array

function myFunction(array, s) {
    return array.map(country => ({ ...country, continent: s }))
}

console.log(myFunction([{ countryName: "Belgium", capital: "Brussels" }, { countryName: "Danmark", capital: "Copenhagen" }, { countryName: "Ireland", capital: "Dublin" }, { countryName: "Greece", capital: "Athens" }, { countryName: "Portugal", capital: "Lisbon" }], "Europe"))