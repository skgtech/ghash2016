/**
 * @fileOverview The Drone model.
 */


module.exports = function(data) {
  this.id = data.id;
  this.col = data.col;
  this.row = data.row;
  this.maxLoad = data.maxLoad;
  this.inventory = data.inventory;
};


