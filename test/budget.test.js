/**
 * @fileOverview Test warehouse budget.
 */

var warehouseFix = require('./fixtures/warehouses.fix');
var Budget = require('../lib/logic/warehouse-budget.logic');

var chai = require('chai');
var expect = chai.expect;

describe('Warehouse Budget', function() {

  describe.only('Nominal Operation', function () {
    it('Should calculate expected budget', function () {
      var budget = new Budget(warehouseFix.warehouses);

      budget.start();

      expect(warehouseFix.warehouses[0].budget).to.deep.equal([-9, 19, 4, -12]);
    });
  });
});
