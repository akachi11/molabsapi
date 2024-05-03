const mongoose = require("mongoose");

const RestaurantSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    location: { type: String, required: true },
    foods: [{ type: String }],
    rating: { type: Number, required: true },
    numberOfRaters: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Restaurant", RestaurantSchema);
