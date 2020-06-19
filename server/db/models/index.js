const db = require('../db');
const User = require('./user');

const { Product, productTypes } = require('./product');
const Artist = require('./artist');

const Order = require('./order');
const OrderItem = require('./orderItem');

//Associations

Order.hasMany(OrderItem);
OrderItem.belongsTo(Product);

User.hasMany(Order);
Order.belongsTo(User);

Artist.hasMany(Product);
Product.belongsTo(Artist);

module.exports = {
  db,
  productTypes,
  Product,
  Artist,
  User,
  Order,
  OrderItem,
};
