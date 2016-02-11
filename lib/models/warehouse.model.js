/**
 * @fileOverview The warehouse model.
 */


module.exports = function(data) {
  this.id = data.id;
  this.col = data.col;
  this.row = data.row;
  this.inventory = data.inventory;

  /** @type {Array} Array of orders served by this warehouse */
  this.orders = [];

  /**
   * The surplass and deficit of products for this warehouse to serve
   * the assigned orders.
   *
   * @type {Array.<Number>} Index of the array representing product id and the
   * value is the deficit (negative number) or surplass or the product.
   */
  this.budget = [];
};


