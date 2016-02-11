'use strict';

module.exports = {};

module.exports.start = function (data) {

  var firstLine = data.splice(0, 1)[0].split(' ');

  var rows = firstLine[0];
  var columns = firstLine[1];
  var dronesNo = firstLine[2];
  var deadline = firstLine[3];
  var maximumLoadOfDrone = firstLine[4];

  var productTypesNo = data.splice(0, 1)[0].split(' ')[0];

  var productWeights = data.splice(0, 1)[0].split(' ');

  var warehouseNo = data.splice(0, 1)[0].split(' ')[0];
  console.log('Rows', rows);
  console.log('Columns', columns);
  console.log('Drones No', dronesNo);
  console.log('Deadline', deadline);
  console.log('Max Load of Drone', maximumLoadOfDrone);

  console.log('Product Types No', productTypesNo);
  console.log('Warehouse No', warehouseNo);

  var warehouses = [];
  var productTypes = [];
  var drones = [];
  var orders = [];

  for (var whCounter = 0;
       whCounter < (warehouseNo * 2) - 1;
       whCounter = whCounter + 2) {

    var firstWLine = data.splice(0, 1)[0].split(' ');
    var secondWLine = data.splice(0, 1)[0].split(' ');
    warehouses.push({
      location: [firstWLine[0], firstWLine[1]],
      stock: secondWLine
    });
  }

  var ordersNo = data.splice(0, 1)[0].split(' ')[0];

  for (var ordersCounter = 0;
       ordersCounter < (ordersNo * 3) - 1;
       ordersCounter = ordersCounter + 3) {

    var firstOLine = data.splice(0, 1)[0].split(' ');
    var secondOLine = data.splice(0, 1)[0].split(' ');
    var thirdOLine = data.splice(0, 1)[0].split(' ');
    orders.push({
      location: [firstOLine[0], firstOLine[1]],
      productItems: secondOLine[0],
      productTypes: thirdOLine
    });
  }

  console.log('Orders No', orders.length);
};
