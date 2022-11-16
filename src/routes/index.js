const express = require("express");
const userRoute = require("./userRoute");
const foodRoute = require("./foodRoute");

const rootRoute = express.Router();
rootRoute.use("/user", userRoute);
rootRoute.use("/food", foodRoute);

module.exports = rootRoute;
