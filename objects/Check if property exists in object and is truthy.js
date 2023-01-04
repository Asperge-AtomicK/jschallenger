// Write a function that takes an object (a) and a string (b) as argument. Return true if the object has a property with key 'b'. Return false otherwise. Tipp: test case 3 is a bit tricky because the value of property 'z' is undefined. But the property itself exists.
function myFunction(obj, key) {
    return Object.hasOwn(obj, key) && (obj[key] ? obj[key] : false)
}

console.log(myFunction({a:1,b:2,c:3},'b'))
console.log(myFunction({x:'a',y:null,z:'c'},'y'))
console.log(myFunction({x:'a',y:'b',z:undefined},'z'))