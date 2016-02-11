/**
 * @fileOverview Helpers.
 */

var helpers = module.exports = {};

/**
 * Calculate distance of two objects which have the col/row props.
 *
 * @param {Object} obj1 Object 1 with col/row.
 * @param {Object} obj2 Object 2 with col/row.
 * @return {Number} Distance in turns rounded.
 */
helpers.dist = function(obj1, obj2) {
  var rowSqr = Math.pow(obj1.row - obj2.row, 2);
  var colSqr = Math.pow(obj1.col - obj2.col, 2);

  var distance = Math.sqrt(rowSqr + colSqr);

  return Math.ceil(distance);
};
