// call is used to assign the this keyword used in a function to any object
const greet = function () {
    return `Hi my name is ${this.firstName} ${this.secondName}`
}

// Now any object that have firstName and secondName can use this function
const hariom = {
    firstName: "hariom",
    secondName: "sharma",
    dob: "1997-07-02"
}

console.log(greet.call(hariom))

// passing params of the function in call()
const calculateAge = function (currentYear, currentMonth, currentDate) { 
    const dob = new Date(this.dob)
    const currDate = new Date(currentYear, currentMonth-1, currentDate)
    const ageMs = currDate - dob
    const agesecs = Math.floor(ageMs/1000)
    const ageHours = Math.floor(agesecs/60)
    const ageDays = Math.floor(ageHours/24)

    return ageDays
}

// here we can see that all params are send after the reference for this keyword
console.log(calculateAge.call(hariom, 2025, 4, 21))


// Array method (but we use it on a string!)
const name = "Bingo";

// Normally, strings don’t have .slice(), but we "borrow" it from arrays!
const sliced = Array.prototype.slice.call(name, 0, 3);

console.log(sliced); // ["B", "i", "n"] (first 3 letters)


