"use strict";

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

/**
 * Notes on using let, var and const
 * 
 * Use var at the top level only (global variable (not recommended for ES6))
 * Default to using let
 * Use const for immutable values (when you do not want reassignment of values)
 */
// using var as top level/global variable (not recommended for ES6, for demo purposes only)
function isFoo(bool) {
  var foo;

  if (bool) {
    foo = 'bar';
    console.log(foo);
  } else {
    console.log(foo);
  }
}

console.log(isFoo(false)); // bar
// using const for immutable values (Value assignment)

var names = ['John', 'Sandy']; // even if const values are immutable, it does not mean it cannot be totally modified. 
// You can use push, pop, shift and unshift to modify the value only if it is an array

names.pop('Sandy'); // Error will occur here since you cannot re-assign values to const variables.
// (Uncaught TypeError: Assignment to constant variable.)

names = (_readOnlyError("names"), ['Eric', 'Marvin']); // Delete this line if you want the code to work

console.log(names);