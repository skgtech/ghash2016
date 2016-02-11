/**
 * @fileOverview Assigns orders to warehouses based on min dist between
 *   order and warehouse.
 */

/**
 * Assigns orders to warehouses based on min dist between
 *   order and warehouse.
 *
 * @constructor
 */
var AssignOrders = module.exports = function(managerInstance) {

  this.gridRows = managerInstance.rows;
  this.gridCols = managerInstance.cols;
  this.warehouses = managerInstance.warehouses;
  this.orders = managerInstance.orders;

  this.warehouseCalcs = Array.prototype.slice.call(this.warehouses);

};

AssignOrders.prototype.start = function() {

};
