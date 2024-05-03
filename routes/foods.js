const router = require("express").Router();
const Foods = require("../models/Foods");

// CREATE FOOD
router.post("/create", async (req, res) => {
  const newFood = new Foods({
    name: req.body.name
  });

  try {
    const savedFood = await newFood.save();
    res.json(savedFood);
  } catch (err) {
    console.log(err);
  }
});

// GET ALL FOODS
router.get("/get-all", async (req, res) => {
  try {
    const foods = await Foods.find();
    res.json(foods);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router