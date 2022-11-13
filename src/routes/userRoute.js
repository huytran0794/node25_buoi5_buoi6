// import local functional

const {
  getUser,
  createUser,
  updateUser,
  getFood,
} = require("../controller/userController");

const express = require("express");

// userRouter with express router
const userRoute = express.Router();

// Get method
userRoute.get("/getUser", getUser);
userRoute.post("/createUser", createUser);
userRoute.put("/updateUser/:user_id", updateUser);

userRoute.get("/getFood", getFood);

// export by default
module.exports = userRoute;
