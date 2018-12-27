
/**
 * Subtracts two numbers using "rest"(opposite of spread)
 * Rest treats params as array
 * 
 * @param {array} numbers An array of integers
 * @returns {number}
 */
function sum(...numbers) {
    return numbers.reduce(
        (prev, current) => prev + current
    );
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
    return x - y + z + `${x} and ${y}`; //  The code: `${x} and ${y}` here is a template string
}

let nums = [8, 1, ' is the difference of '];

console.log(diff(...nums)); // "Spread" suppplies an array parameter to a function during function call