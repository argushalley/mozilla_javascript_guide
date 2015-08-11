/*
 * Scratchpad
 * strings_to_number_conversion.js
 * parseInt(string, radix) - radix between 2 and 36
 * parseFloat(string)
 */

console.log(parseInt("11", 2)); // logs 3
console.log(parseInt("73", 10)); // logs 73
console.log(parseInt("52")); // logs 52

console.log(parseFloat("3.14159")); // logs 3.14159

// Unary plus (+) also retrieves a number from a string
console.log("1.1" + "1.1"); // logs "1.11.1"
console.log((+"1.1") + (+"1.1")); // logs 2.2
// Note: parentheses are added for clarity, not required.