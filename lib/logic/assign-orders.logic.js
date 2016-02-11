/**
 * @fileOverview Assigns orders to warehouses based on min dist between
 *   order and warehouse.
 */
var helpers = require('../util/helpers');
var _ = require('lodash');

/**
 * Assigns orders to warehouses based on min dist between
 *   order and warehouse.
 *
 * @constructor
 */
var AssignOrders = module.exports = function(managerInstance) {

  this.warehouses = managerInstance.warehouses;
  this.orders = managerInstance.orders;

  this.warehouseCalcs = Array.prototype.slice.call(this.warehouses);
  this.ordersCalcs = Array.prototype.slice.call(this.orders);

};

/**
 * Start processing warehouses and orders, assign orders on warehouses.
 *
 * @return {Array.<Object>} An array of warehouse items augmented with the
 *   "orders" property, an array of objects.
 */
AssignOrders.prototype.start = function() {
  this.warehouseCalcs.forEach(function(warehouseItem) {
    this.ordersCalcs.forEach(function(orderItem) {
      var dist = helpers.dist(warehouseItem, orderItem);
      orderItem.warehouses = orderItem.warehouses || [];
      orderItem.warehouses.push({
        id: warehouseItem.id,
        dist: dist,
      });
    }, this);
  }, this);

  // populate all Warehourses with orders array.
  this.warehouseCalcs.forEach(function (warehouseItem) {
    warehouseItem.orders = warehouseItem.orders || [];
  });

  this.ordersCalcs.forEach(function(orderItem) {
    var shorter = orderItem.warehouses.reduce(function(prevVal, wareItem) {
      if (!prevVal) {
        return wareItem;
      }

      if (prevVal.dist > wareItem.dist) {
        return wareItem;
      } else {
        return prevVal;
      }
    }, null);

    var warehouseItem = _.find(this.warehouseCalcs, {id: shorter.id});
    warehouseItem.orders.push(orderItem);
  }, this);

  return this.warehouseCalcs;
};
