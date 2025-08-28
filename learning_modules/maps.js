// maps in js is an object that remers the order of the key insertion

const students = new Map()
const classteacher = new Map([
    ["name", "hariom Sharma"],
    ["class", "B.Ed"]
])

console.log(students)
console.log(classteacher)

// CRUD
// adding a new key
classteacher.set("hobby", "coding")
console.log(classteacher)
// updating
classteacher.set("hobby", "programming")
console.log(classteacher)
// get
console.log(classteacher.get("name"))
// delete key
classteacher.delete("hobby")
console.log(classteacher)
// get size
console.log(classteacher.size)
// clearing entire map 
// classteacher.clear()
console.log(classteacher)


// Object to Map
const obj = { a: 1, b: 2 };
const mapFromObj = new Map(Object.entries(obj));
console.log(mapFromObj)

// Map to Object
const classteacherObj = Object.fromEntries(classteacher);
console.log(classteacherObj)