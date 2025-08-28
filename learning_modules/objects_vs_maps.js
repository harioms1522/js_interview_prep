// ***************************************************************************************************
// 1. objects vs maps
// ***************************************************************************************************
// objects are key-value pairs
// maps are key-value pairs
// objects are unordered
// maps are ordered
// objects are not iterable
// maps are iterable
// size of objects can be checked using Object.keys(obj).length
// size of maps can be checked using map.size


const obj = {
    name: "John",
    age: 30,
    city: "New York",
    greet: function() {
        console.log("Hello, I am " + this.name)
    }
}

const map = new Map([
    ["name", "John"],
    ["age", 30],
    ["city", "New York"],
    ["greet", function() {
        console.log("Hello, I am " + this.name)
    }]
])

console.log(obj)
console.log(map)


// 2. objects vs maps
// ***************************************************************************************************
// 2.1. objects are not iterable
// for (const key in obj) {
//     console.log(key) // name, age, city, greet
// }

// 2.2. maps are iterable
// for (const [key, value] of map) {
//     console.log(key, value) // name John, age 30, city New York, greet [Function (anonymous)]
// }

// CONCLUSION
// serialization to JSON

// since keys can be any type, we can not serialize maps to JSON using JSON.stringify(map)
// we can only serialize maps to JSON using JSON.stringify(Array.from(map))

// objects can be serialized to JSON using JSON.stringify(obj)
const obj2 = JSON.parse(JSON.stringify(obj))
// maps can not be serialized to JSON using JSON.stringify(map)
const map2 = JSON.parse(JSON.stringify(map))

console.log("obj2", obj2)
console.log("map2", map2)

// how to serialize maps to JSON
// convert to array
const mapArray = Array.from(map)
console.log("mapArray", mapArray)
// serialize the array to JSON
const mapArray2 = JSON.parse(JSON.stringify(mapArray))
console.log("mapArray2", mapArray2)
// convert the JSON string to a map


//  deserialize the map from JSON
const map3 = new Map(JSON.parse(JSON.stringify(mapArray2)))
console.log("map3", map3)




