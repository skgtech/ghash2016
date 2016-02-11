
var Order = require('../../lib/models/order.model');
var Warehouse = require('../../lib/models/warehouse.model');
var Product = require('../../lib/models/product.model');

var fix = module.exports = {};

fix.orders = [
  new Order({id: 0, col: 12, row: 14, inventory: [
    new Product({id: 0, quantity: 10}),
    new Product({id: 1, quantity: 15}),
    new Product({id: 2, quantity: 9}),
    new Product({id: 3, quantity: 8}),
  ]}),
  new Order({id: 1, col: 14, row: 16, inventory: [
    new Product({id: 0, quantity: 5}),
    new Product({id: 1, quantity: 6}),
    new Product({id: 2, quantity: 12}),
    new Product({id: 3, quantity: 16}),
  ]}),

];

fix.warehouses = [
  new Warehouse({id: 0,col: 5, row: 9, inventory: [
    new Product({id: 0, quantity: 6}),
    new Product({id: 1, quantity: 40}),
    new Product({id: 2, quantity: 25}),
    new Product({id: 3, quantity: 12}),
  ]}),
];

fix.warehouses[0].orders = [
  fix.orders[0],
  fix.orders[1],
];
