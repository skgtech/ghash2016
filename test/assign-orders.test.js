/**
 * @fileOverview Test assign orders.
 */
var _ = require('lodash');

var ordersFix = require('./fixtures/orders.fix');
var AssignOrders = require('../lib/logic/assign-orders.logic');

var chai = require('chai');
var expect = chai.expect;

describe('Assign Orders test', function() {

  describe('Nominal Operation', function () {
    it('Should calculate as expected', function () {
      var assignOrder = new AssignOrders({
        warehouses: ordersFix.warehouses,
        orders: ordersFix.orders,
      });

      var res = assignOrder.start();

      var w1 = _.find(res, {id: 0});
      var w1OrderIds = w1.orders.map(function(orderItem) {
        return orderItem.id;
      });
      var w2 = _.find(res, {id: 1});
      var w2OrderIds = w2.orders.map(function(orderItem) {
        return orderItem.id;
      });
      var w3 = _.find(res, {id: 2});
      var w3OrderIds = w3.orders.map(function(orderItem) {
        return orderItem.id;
      });
      var w4 = _.find(res, {id: 3});
      var w4OrderIds = w4.orders.map(function(orderItem) {
        return orderItem.id;
      });


      expect(w1OrderIds).to.deep.equal([1]);
      expect(w2OrderIds).to.deep.equal([]);
      expect(w3OrderIds).to.deep.equal([0,2]);
      expect(w4OrderIds).to.deep.equal([3]);

    });
  });
});
