/*
 * Scratchpad
 * variable_hoisting.js
 */

console.log(x === undefined); // logs "true"
var x = 3;

// will return a value of undefined
var myvar = "my value";

(function() {
  console.log(myvar); // undefined
  var myvar = "local value";
})();

// The above codes will be interpreted the same as:

/**
 * var x;
 * console.log(x == undefined); // logs "true"
 * x = 3;
 */

/**
 * // will return a value of undefined
 * var myvar = "my value";
 *
 * (function() {
 *   console.log(myvar); // undefined
 *   var myvar = "local value";
 * })();
 */