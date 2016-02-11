
var Order = require('../../lib/models/order.model');
var Warehouse = require('../../lib/models/warehouse.model');

var fix = module.exports = {};

fix.orders = [
  new Order({id: 0, col: 12, row: 14}),
  new Order({id: 1, col: 3, row: 7}),
  new Order({id: 2, col: 9, row: 16}),
  new Order({id: 3, col: 20, row: 5}),
];

fix.warehouses = [
  new Warehouse({id: 0,col: 5, row: 9}),
  new Warehouse({id: 1,col: 4, row: 14}),
  new Warehouse({id: 2,col: 7, row: 15}),
  new Warehouse({id: 3,col: 19, row: 16}),
];
