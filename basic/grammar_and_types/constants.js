/*
 * Scratchpad
 * constants.js
 */

// THIS WILL CAUSE AN ERROR
function f() {};
const f = 5;
/*
Exception: TypeError: redeclaration of var f
@Scratchpad/9:8
*/

// THIS WILL CAUSE AN ERROR ALSO
function f() {
  const g = 5;
  var g;
}
/*
Exception: TypeError: redeclaration of const g
@Scratchpad/9:17
*/