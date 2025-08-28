// ***************************************************************************************************
// 1. slice method
// ***************************************************************************************************
// slice method is used to create a new array from a given array
// it does not modify the original array
// it returns a new array
// it takes two arguments: start index and end index
// if no end index is provided, it will return all the elements from the start index to the end of the array
// if no start index is provided, it will return all the elements from the start of the array to the end index
// if no arguments are provided, it will return all the elements from the start of the array to the end of the array

const fruits = ["apple", "banana", "cherry", "date", "elderberry"]

// 1.1. without arguments
console.log(fruits.slice()) // ["apple", "banana", "cherry", "date", "elderberry"]

// 1.2. with start index
// includes the the first n+1 elements from the array
console.log(fruits.slice(2)) // ["cherry", "date", "elderberry"]

// 1.3. with start and end index
console.log(fruits.slice(2, 4)) // ["cherry", "date"]

// 1.4. no start index --> not possible in slice
// console.log(fruits.slice(1, 4)) // ["cherry", "date"]

// 1.5. with negative end index
// if -ve end index is provided, it will exclude the last n elements from the array
console.log(fruits.slice(0, -2)) // ["apple", "banana", "cherry"]

// 1.6. with negative start index
// if -ve start index is provided, it will exclude the first n+1 elements from the array
console.log(fruits.slice(-2,4)) // ["date", "elderberry"]

// 1.7. with negative start and end index
// if -ve start and end index are provided, it will exclude the first n+1 elements and the last m elements from the array
console.log(fruits.slice(-2, -4)) // []


// 1.8. shallow copy
// this creates a shallow copy of the array
// so the elements of the array are not copied, they are referenced
// so if the original array is modified, the copied array will also be modified
// and vice versa
const complexArray = [{a: 1}, {b: 2}, {c: 3}]
const complexArrayCopy = complexArray.slice()
console.log(complexArray)
console.log(complexArrayCopy)
console.log(complexArray === complexArrayCopy) // false
console.log(complexArray[0] === complexArrayCopy[0]) // true << this is shallow copy

// modifying the copied array
complexArrayCopy[0].a = 10
console.log(complexArray)
console.log(complexArrayCopy)
console.log(complexArray === complexArrayCopy) // false
console.log(complexArray[0] === complexArrayCopy[0]) // true << this is shallow copy



// ***************************************************************************************************
// 2. splice method
// ***************************************************************************************************
// splice method is used to modify the original array
// it returns the removed elements
// it takes three arguments: start index, delete count, items to add
// if no items to add are provided, it will delete the elements from the start index to the end of the array
// if no delete count is provided, it will delete all the elements from the start index to the end of the array

let numbers = [1, 2, 3, 4, 5]

// 2.1. without arguments
// it will delete all the elements from the array
console.log("2.1. without arguments")
numbers = [1, 2, 3, 4, 5]
console.log(numbers) // [1, 2, 3, 4, 5]
console.log(numbers.splice()) // []
console.log(numbers) // []

// 2.2. with start index
// it will delete the elements from the start index to the end of the array
console.log("2.2. with start index")
numbers = [1, 2, 3, 4, 5]
console.log(numbers) // [1, 2, 3, 4, 5]
console.log(numbers.splice(2)) // [3, 4, 5]
console.log(numbers) // [1, 2]

// 2.3. with start index and delete count
// it will delete the elements from the start index to the end of the array
console.log("2.3. with start index and delete count")
numbers = [1, 2, 3, 4, 5]
console.log(numbers) // [1, 2, 3, 4, 5]
console.log(numbers.splice(2, 2)) // [3, 4]
console.log(numbers) // [1, 2]

// 2.4. with start index, delete count and items to add
// it will delete the elements from the start index to the end of the array and add the items to the array
console.log("2.4. with start index, delete count and items to add")
numbers = [1, 2, 3, 4, 5]
console.log(numbers) // [1, 2, 3, 4, 5]
console.log(numbers.splice(2, 2, 6, 7)) // [3, 4]
console.log(numbers) // [1, 2, 6, 7]

// 2.5. with negative start index
// it will delete the elements from the start index to the end of the array
console.log("2.5. with negative start index")
numbers = [1, 2, 3, 4, 5]
console.log(numbers) // [1, 2, 3, 4, 5]
console.log(numbers.splice(-2)) // [6, 7]
console.log(numbers) // [1, 2]



// ***************************************************************************************************
// 3. slice vs splice
// ***************************************************************************************************
// slice is used to create a new array from a given array
// it does not modify the original array
// it returns a new array
// it takes two arguments: start index and end index

// splice is used to modify the original array
// it modifies the original array
// it returns the removed elements
// it takes three arguments: start index, delete count, items to add