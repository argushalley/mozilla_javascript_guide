/*
 * Scratchpad
 * null_value.js
 */

var a = null;

// null evaluates to false in boolean context
if (!a) console.log("null value evaluates to false");

// null evaluates to 0 in numeric context
var b = a + 2;
console.log("a + 2 = " + b);