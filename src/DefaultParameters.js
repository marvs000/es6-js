
/**
 * Sets the default discount rate
 * @returns {number} Discount rate
 */
function defaultDiscountRate() {
    return .5
}

/**
 * Sets the default discount rate
 * @param {number} cost Cost of purchase
 * @param {number} discount Discount rate
 * @returns {number} Discount rate
 */
function applyDiscount(cost, discount = defaultDiscountRate()) {
    return cost - (cost * discount);
}

alert(applyDiscount(100));