const mongoose = require("mongoose");
const { model } = mongoose;
const { HoldingsSchema } = require("../schemas/HoldingsSchema");

const holdingsModel = new model("Holding", HoldingsSchema);

module.exports = { holdingsModel };
