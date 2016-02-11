'use strict';

var DroneModel = require('./lib/models/drone.model');
var OrderModel = require('./lib/models/order.model');
var ProductModel = require('./lib/models/product.model');
var WarehouseModel = require('./lib/models/warehouse.model');
var WItemModel = require('./lib/models/wItem.model');

module.exports = {};

module.exports.start = function (data) {

  var firstLine = data.splice(0, 1)[0].split(' ');

  var rows = firstLine[0];
  var columns = firstLine[1];
  var dronesNo = firstLine[2];
  var deadline = firstLine[3];
  var maximumLoadOfDrone = firstLine[4];

  var productTypesNo = data.splice(0, 1)[0].split(' ')[0];

  var products = data.splice(0, 1)[0].split(' ').map(function (weight, i) {
    return new ProductModel({
      id: i,
      weight: weight
    });
  });

  var warehouseNo = data.splice(0, 1)[0].split(' ')[0];
  console.log('Rows', rows);
  console.log('Columns', columns);
  console.log('Drones No', dronesNo);
  console.log('Deadline', deadline);
  console.log('Max Load of Drone', maximumLoadOfDrone);

  console.log('Product Types No', productTypesNo);
  console.log('Warehouse No', warehouseNo);

  var warehouses = [];
  var orders = [];

  for (var whCounter = 0;
       whCounter < (warehouseNo * 2) - 1;
       whCounter = whCounter + 2) {

    var wLocation = data.splice(0, 1)[0].split(' ');
    var wProducts = data.splice(0, 1)[0].split(' ');

    warehouses.push(
      new WarehouseModel({
        id: whCounter / 2,
        row: wLocation[0],
        col: wLocation[1],
        inventory: wProducts.map(function (quantity, i) {

          return new WItemModel({
            productTypeId: i,
            quantity: quantity
          });
        })
      })
    );
  }

  var ordersNo = data.splice(0, 1)[0].split(' ')[0];

  for (var ordersCounter = 0;
       ordersCounter < (ordersNo * 3) - 1;
       ordersCounter = ordersCounter + 3) {

    var oLocation = data.splice(0, 1)[0].split(' ');
    var oTotalProducts = data.splice(0, 1)[0].split(' ');
    var oProducts = data.splice(0, 1)[0].split(' ');

    orders.push(
      new OrderModel({
        id: ordersCounter / 2,
        row: oLocation[0],
        col: oLocation[1],
        inventory: oProducts.map(function (productType) {
          return products[productType];
        })
      })
    );
  }

  console.log('Orders No', orders.length);
};
