/*
 * Scratchpad
 * undefined_value.js
 */

var a;

// undefined value evaluates to false in a boolean context
if (!a) console.log("Variable a has no value");

// undefined value evaluates to NaN in numeric context
var b = a + 2;
console.log("a + 2 = " + b);
