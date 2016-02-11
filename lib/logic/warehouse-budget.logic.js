/**
 * @fileOverview Calculates surplass and deficit of products of a warehouse
 *   based on the assigned orders.
 */
var _ = require('lodash');

var Budget = module.exports = function(warehouses) {
  this.warehouses = warehouses;
};

/**
 * Start the budgeting operation.
 *
 * Augments the warehouses item budget.
 */
Budget.prototype.start = function() {
  this.warehouses.forEach(function(warehouseItem) {
    var orderDemands = [];
    console.log('warehouseItem:', warehouseItem.id, warehouseItem.orders.length);
    warehouseItem.orders.forEach(function(orderItem) {
      orderItem.inventory.forEach(function(productItem) {
        console.log('productItem:', productItem.id, 'quantity:', productItem.quantity);

        if (orderDemands[productItem.id]) {
          orderDemands[productItem.id] += productItem.quantity;
        } else {
          orderDemands[productItem.id] = productItem.quantity;
        }
      }, this);
    }, this);

    var budget = new Array(orderDemands.length).fill(0);

    orderDemands.forEach(function(quantityDemand, productId) {
      console.log('productId:', productId, 'quantityDemand:', quantityDemand);
      if (!quantityDemand) {
        return;
      }

      var wInventoryProduct = _.find(warehouseItem.inventory, {id: productId});
      if (wInventoryProduct) {
        budget[productId] = wInventoryProduct - quantityDemand;
      } else {
        budget[productId] = quantityDemand * -1;
      }
    }, this);

    console.log('assigning:', budget);
    warehouseItem.budget = budget;
  }, this);
};
