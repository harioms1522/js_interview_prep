// ***************************************************************************************************
// 1. type coercion
// ***************************************************************************************************

// ***************************************************************************************************
// 1.1. loose equality Vs strict equality
// loose equality is type coercion
// ***************************************************************************************************
// 0 == false            // true      (loose equality, type coercion)
// 0 === false           // false     (strict equality, different types)
// 1 == "1"              // true      (string converted to number)
// 1 === "1"             // false     (different types)
// null == undefined     // true      (special case)
// null === undefined    // false     (different types)
// '0' == false          // true      ('0' is converted to 0)
// '0' === false         // false     (different types)


// ***************************************************************************************************
// 2. NaN >> since NaN is not a number, it is not equal to itself
// ***************************************************************************************************
// NaN is never equal to itself
// NaN == NaN            // false     (NaN is never equal to itself)
// NaN === NaN           // false
// use Number.isNaN(NaN) to check if a value is NaN

// ***************************************************************************************************
// 3. reference type >> actually the memory address is compared
// ***************************************************************************************************
// reference type never equal to each other
// [] == []              // false     (different array objects)
// [] === []             // false
// {} == {}              // false     (different object references)
// {} === {}             // false

// ***************************************************************************************************
// 4. null and undefined >> since these are primitive types, they are equal to themselves 
// ***************************************************************************************************
// null === null // true
// undefined === undefined // true

