console.log("Creating objects in JS")

// ***************************************************************************************************
// 1. Using Object Literals
// ***************************************************************************************************
const student = {

    // properties
    name: "John Doe",
    age: 20,

    // method
    // created a method inside the object
    // which can access the properties of the object using 'this' keyword
    // supports encapsulation
    // however, not memory efficient if we create multiple objects
    // each object will have its own copy of the method
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

console.log("student", student)
student.greet()

// ***************************************************************************************************
// 2. Using Factory Functions
// ***************************************************************************************************
// a function that returns an object
function createStudent(name, age) {
    return {
        name: name,
        age: age,
        greet: function() {
            console.log(`Hello, my name is ${this.name}`);
        }
    }
}
// now we can create multiple student objects using the factory function
// and all of them will have their own copy of the greet method
// this is still not memory efficient
const student3 = createStudent("Alice", 23)
const student4 = createStudent("Bob", 24)
console.log("student3", student3)
console.log("student4", student4)
console.log(student3.greet === student4.greet, "not memory efficient") // false << not that memory efficient


//  ***************************************************************************************************
// 3. Using Constructor Functions
// ***************************************************************************************************
// a function that is used to create objects
function Student(name, age) {
    this.name = name
    this.age = age
    this.greet = function() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

const student5 = new Student("Jane Doe", 22)
const student6 = new Student("Jim Beam", 25)
console.log("student5", student5)
console.log("student6", student6)
console.log(student5.greet === student6.greet, "not memory efficient") // false << still not that memory efficient

// lets make it memory efficient
// we can add methods to the prototype of the constructor function
// this is more memory efficient
// because all the objects will share the same method
// and the method will be stored in the prototype object
// and not in the object itself
// this is the best way to create objects in JS
Student.prototype.study = function() {
    console.log(`${this.name} is studying`);
}

const student7 = new Student("Charlie", 26)
const student8 = new Student("Dave", 27)
console.log("student7", student7)
console.log("student8", student8)
console.log(student7.study === student8.study, "this is more memory efficient") // true << now memory efficient



// ***************************************************************************************************
// 4. Using ES6 Classes
// ***************************************************************************************************
// a class is a blueprint for creating objects
// it is a syntactic sugar for constructor functions
// it is more memory efficient than constructor functions
// because all the objects will share the same method
// and the method will be stored in the prototype object
// and not in the object itself
class StudentClass {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
    study() {
        console.log(`${this.name} is studying`);
    }
}

const student9 = new StudentClass("Eve", 28)
const student10 = new StudentClass("Frank", 29)

// check how the protype is shared
console.log("student9", student9)
console.log("student10", student10)
console.log(student9.greet === student10.greet, "this is more memory efficient") // true << now memory efficient
console.log(student9.__proto__ === student10.__proto__, "this is more memory efficient, prototype is shared") // true << now memory efficient



// ***************************************************************************************************
// 5. Using Object.create()
// ***************************************************************************************************
// a function that is used to create objects

const proto = {
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    },
    study: function() {
        console.log(`${this.name} is studying`);
    }
}

function StudentObjectCreate(name, age) {
    // Object.create() creates a new object with the prototype of the object passed as an argument
    // if no prototype is passed, it creates a new object with no prototype
    // if null is passed, it creates a new object with no prototype
    // if a prototype is passed, it creates a new object with the prototype of the object passed as an argument
    const obj = Object.create(proto) // no prototype
    obj.name = name
    obj.age = age
    return obj
}

const student11 = StudentObjectCreate("George", 30)
const student12 = StudentObjectCreate("Harry", 31)
console.log("student11", student11)
console.log("student12", student12)
// check how the prototype is shared
console.log(student11.greet === student12.greet, "this is more memory efficient") // true << now memory efficient



// ***************************************************************************************************
// 6. Using Object.assign()
// ***************************************************************************************************
// Object.assign() creates a new object with the properties of the object passed as an argument
// if no properties are passed, it creates a new object with no properties
// if a property is passed, it creates a new object with the property of the object passed as an argument
const student13 = Object.assign({}, proto, { name: "George", age: 30 })
console.log("student13", student13)



// ***************************************************************************************************
// 7. Using Object.create() and Object.assign()
// ***************************************************************************************************
const student14 = Object.create(proto, { name: { value: "George", writable: true }, age: { value: 30, writable: true } })
console.log("student14", student14)