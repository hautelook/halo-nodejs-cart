/**
 * @function
 *
 * simple cart
 */
 var Cart = {
   subtotal: function() {
     return 0;
   }
 };

 module.exports = {
   create: function() {
     return Object.create(Cart);
   }
 };
