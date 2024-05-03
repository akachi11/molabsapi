const mongoose = require("mongoose");

const FoodsSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Foods', FoodsSchema)