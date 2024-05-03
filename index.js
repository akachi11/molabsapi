const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const restaurantRoute = require("./routes/restaurant");
const foodsRoute = require("./routes/foods");

const cors = require("cors");

const app = express();

dotenv.config();

app.use(
  cors({
    origin: "*",
  })
);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Database connected"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use("/api/restaurant", restaurantRoute);
app.use("/api/foods", foodsRoute);

app.listen(5000, () => {
  console.log("Backend running");
});
