/**
 * @fileOverview The product model.
 */


module.exports = function(data) {
  this.id = (+data.id);
  this.weight = (+data.weight);
  this.quantity = data.quantity;
};
