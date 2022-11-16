// import local functional

const {
  getFood,
  getLikeRes,
  getUserResLike,
  getRestaurantUserLike,
} = require("../controller/foodController");

const express = require("express");

// userRouter with express router
const foodRoute = express.Router();

// Get method
foodRoute.get("/getFood", getFood);
foodRoute.get("/getLikeRes", getLikeRes);
foodRoute.get("/getUserResLike", getUserResLike);
foodRoute.get("/getRestaurantUserLike", getRestaurantUserLike);

// export by default
module.exports = foodRoute;
