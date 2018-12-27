"use strict";

/**
 * Subtracts two numbers using "rest"(opposite of spread)
 * Rest treats params as array
 * 
 * @param {array} numbers An array of integers
 * @returns {number}
 */
function sum() {
  for (var _len = arguments.length, numbers = new Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key];
  }

  return numbers.reduce(function (prev, current) {
    return prev + current;
  });
}

console.log(sum(1, 2, 3, 4, 5));
/**
 * Subtracts two numbers using spread(opposite of rest)
 * 
 * @param {number} x The First Number
 * @param {number} y The Second Number
 * @param {string} z Description
 * @returns {number} The difference of two numbers
 */

function diff(x, y, z) {
  return x - y + z + "".concat(x, " and ").concat(y); //  The code: `${x} and ${y}` here is a template string
}

var nums = [8, 1, ' is the difference of '];
console.log(diff.apply(void 0, nums)); // "Spread" suppplies an array parameter to a function during function call