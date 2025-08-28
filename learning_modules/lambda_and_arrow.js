// ***************************************************************************************************
// 1. lambda and arrow
// ***************************************************************************************************


// to write a function in one line, we can use arrow function
// example:

const add = (a, b) => a + b
console.log(add(1, 2))

// key features of arrow function:
// Arrow functions do not have their own this, arguments, super, or new.target bindings. They inherit these from their surrounding (lexical) context

const obj = {
    name: "John",
    greet: function() {
        console.log("Hello, I am " + this.name)
    }
}
obj.greet()

// arrow function does not have its own this, so it will use the this of the surrounding context
const obj2 = {
    name: "Jane",
    greet: () => {
        console.log("Hello, I am " + this.name)
    }
}
obj2.greet()

// ***************************************************************************************************
// 2. arrow function with arguments
// ***************************************************************************************************
// arrow function does not have its own arguments, so it will use the arguments of the surrounding context
const obj3 = {
    name: "Jim",
    greet: (...args) => {
        console.log("Hello, I am " + this.name, args)
        console.log(args[0])
    }
}
obj3.greet(1, 2, 3)






// ***************************************************************************************************
