/**
* Cart steps
*/
var Cart = require(process.cwd() + '/models/cart');
var expect = require('chai').expect;

module.exports = function() {
  var cart;
  this.Given('I have an empty cart', function (callback) {
    // Write code here that turns the phrase above into concrete actions
    this.cart = Cart.create();
    callback();
  });

  this.Then(/^My subtotal should be "([^"]*)" dollars$/, function (subtotal, callback) {
    expect(this.cart.subtotal()).to.equal(Number(subtotal));
    callback();
  });


  this.When(/^I add a "([^"]*)" dollar item named "([^"]*)"$/, function (productPrice, productName, callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });

  this.Given(/^I have a cart with a "([^"]*)" dollar item named "([^"]*)"$/, function (productPrice, productName, callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });

  this.Then(/^My quantity of products named "([^"]*)" should be "([^"]*)"$/, function (productName, quantity, callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });

  this.When(/^I apply a "([^"]*)" percent coupon code$/, function (discountAmount, callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });

  this.When(/^I add a "([^"]*)" dollar "([^"]*)" lb item named "([^"]*)"$/, function (productPrice, productWeight, productName, callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });

  this.Then(/^My total should be "([^"]*)" dollars$/, function (cartTotal, callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });
}
