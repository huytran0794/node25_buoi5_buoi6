// import local functional
const {
  getUser,
  createUser,
  updateUser,
  signUp,
  login,
} = require("../controller/userController");

const { getImage, handleFileBase } = require("../controller/fileController");

const express = require("express");

// userRouter with express router
const userRoute = express.Router();

// code cho bai 7 - phan up load hinh
const multer = require("multer");
const upload = require("../middlewares/uploadStorage");

userRoute.post("/upload", upload.single("dataUploadImg"), getImage);
userRoute.post("/upload_base", upload.single("dataUploadImg"), handleFileBase);
// code cho bai 7 - phan up load hinh

// Get method
userRoute.get("/getUser", getUser);

// post method
userRoute.post("/createUser", createUser);

// puth method
userRoute.put("/updateUser/:user_id", updateUser);

// sign up
userRoute.post("/signup", signUp);

// login
userRoute.get("/login", login);

// export by default
module.exports = userRoute;
