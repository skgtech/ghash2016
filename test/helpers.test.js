/**
 * @fileOverview Test helpers.
 */
var chai = require('chai');
var expect = chai.expect;

var Warehouse = require('../lib/models/warehouse.model');
var Order = require('../lib/models/order.model');
var helpers = require('../lib/util/helpers');

describe('Helpers', function() {

  describe.only('distance', function () {
    it('Should calculate linear distance', function () {
      var warehouse = new Warehouse({col: 1, row: 1});
      var order = new Order({col: 2, row: 1});

      var dist = helpers.dist(warehouse, order);

      expect(dist).to.equal(1);
    });
    it('Should calculate diagonal distance', function() {
      var warehouse = new Warehouse({col: 0, row: 0});
      var order = new Order({col: 12, row: 12});

      var dist = helpers.dist(warehouse, order);
      expect(dist).to.equal(17);
    });
  });
});
