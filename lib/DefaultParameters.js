"use strict";

/**
 * Sets the default discount rate
 * @returns {number} Discount rate
 */
function defaultDiscountRate() {
  return .5;
}

/**
 * Sets the default discount rate
 * @param {number} cost Cost of purchase
 * @param {number} discount Discount rate
 * @returns {number} Discount rate
 */
function applyDiscount(cost) {
  var discount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultDiscountRate();
  return cost - cost * discount;
}

alert(applyDiscount(100));