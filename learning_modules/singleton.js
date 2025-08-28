// creating a singleton using an IIFE (Immediately Invoked Function Expression)

// Application: when we want to ensure that a class has only one instance
// and provide a global point of access to it

// Examples: database connection, logging, configuration settings

const Singleton = (function () {
    // IIFE is used to create a private scope
    // so that the instance is not accessible from outside
    let instance
    
    // and the getInstance has access to it using closure
    // also createInstance is private and not accessible from outside
    function createInstance() {
        const object = new Object("I am the instance")
        return object
    }

    return {
        // the only way to get the instance
        getInstance: function () {
            if (!instance) {
                instance = createInstance()
            }
            return instance
        }
    }
})()


const i1 = Singleton.getInstance()
const i2 = Singleton.getInstance()
// checking if both instances are same
// these are pointing to the same memory location
console.log(i1 === i2) // true 