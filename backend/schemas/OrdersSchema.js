const mongoose = require("mongoose");
const { Schema } = mongoose;

const ordersSchema = new Schema({
  name: String,
  qty: Number,
  price: Number,
  mode: String,
});

module.exports = { ordersSchema };
