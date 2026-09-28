const mongoose = require("mongoose");
const { model } = mongoose;

const { positionsSchema } = require("../schemas/PositionsSchema");

const positionsModel = model("Position", positionsSchema);

module.exports = { positionsModel };
