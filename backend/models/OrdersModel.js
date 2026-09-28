const mongoose = require("mongoose");
const { model } = mongoose;

const { ordersSchema } = require("../schemas/OrdersSchema");

const ordersModel = model("Order", ordersSchema);

mongoose.export = { ordersModel };
