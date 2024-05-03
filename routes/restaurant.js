const router = require("express").Router();
const Restaurant = require("../models/Restaurant");

// CREATE RESTAURANT
router.post("/create", async (req, res) => {
  const newRestaurant = new Restaurant({
    name: req.body.name,
    location: req.body.location,
    foods: req.body.foods,
    rating: req.body.rating,
    numberOfRaters: req.body.numberOfRaters,
  });

  try {
    const savedRestaurant = await newRestaurant.save();
    res.json(savedRestaurant);
  } catch (err) {
    console.log(err);
  }
});

// GET ALL RESTAURANTS
router.get("/get-all", async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.json(restaurants);
  } catch (error) {
    res.json(error);
  }
});

// GET RESTAURANTS BY FOOD
router.post("/get-by-food", async (req, res) => {
  try {
    const restaurants = await Restaurant.find({ foods: req.body.food });
    res.json(restaurants);
  } catch (error) {
    res.json(error);
  }
});

// GET RESTAURANTS BY RATING
router.get("/get-by-rating", async (req, res) => {
  try {
    const restaurants = await Restaurant.find().sort({ rating: -1 });
    res.json(restaurants);
  } catch (error) {
    res.json(error);
  }
});

// GET RESTAURANTS BY RATERS
router.get("/get-by-raters", async (req, res) => {
  try {
    const restaurants = await Restaurant.find().sort({ numberOfRaters: -1 });
    res.json(restaurants);
  } catch (error) {
    res.json(error);
  }
});

// GET RESTAURANTS BY DATE
router.get("/get-by-date", async (req, res) => {
  try {
    const restaurants = await Restaurant.find().sort({ createdAt: -1 });
    res.json(restaurants);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
