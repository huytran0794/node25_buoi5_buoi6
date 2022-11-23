// const Food = require("../models/food");
// const Food_Type = require("../models/food_type");
// const User = require("../models/user");

const sequelize = require("../_old_v1_models/index");
const initModels = require("../models/init-models");

const model = initModels(sequelize);
const { successCode, failCode, errorCode } = require("../config/response");
const e = require("cors");

let { food, food_type, like_res, order, rate_res, restaurant, sub_food, user } =
  model;

// r => read data => get
const getUser = async (req, res) => {
  try {
    const data = await user.findAll();
    // res.send(data);
    successCode(res, data, "Lấy dữ liệu user thành công");
  } catch (error) {
    // res.send(error);
    errorCode(res, "Lỗi backend");
  }
};

const getTitle = (req, res) => {
  res.send("Hello sang, getting title ");
};

// c => POST
const createUser = async (req, res) => {
  try {
    let { full_name, email, passWord } = req.body;
    let checkEmail = await user.findAll({
      where: {
        email,
      },
    });
    // cai nay bat buoc phai co where
    let checkEmailObj = await user.findOne({
      where: {
        email,
      },
    });

    if (checkEmail.length > 0) {
      failCode(res, email, "Email đã tồn tại");
    } else {
      let result = await user.create({
        full_name,
        email,
        passWord,
      });
      // res.send(result);
      successCode(res, checkEmail, "Tạo user thành công");
    }
  } catch (error) {
    // res.send(error);
    errorCode(res, "Lỗi backend");
  }
};

// u => PUT
const updateUser = async (req, res) => {
  try {
    let { user_id } = req.params;
    let { full_name, email, passWord } = req.body;
    let checkUserObj = await user.findOne({
      where: {
        user_id,
      },
    });

    if (checkUserObj) {
      let result = await user.update(
        {
          full_name,
          email,
          passWord,
        },
        {
          where: {
            user_id,
          },
        }
      );
      // res.status(200).send("Update thành công !!");
      successCode(res, checkUserObj, "Update user thành công");
    } else {
      // res.status(400).send("User không tồn tại");
      failCode(res, user_id, "User không tồn tại");
    }
  } catch (error) {
    // res.status(500).send("Lỗi backend");
    errorCode(res, "Lỗi backend");
  }
};

// d => delete data => destroy

// jwt - signup
const signUp = async (req, res) => {
  const bcrypt = require("bcrypt");
  try {
    let { full_name, email, pass_word } = req.body;
    // cai nay bat buoc phai co where
    let passWordHash = bcrypt.hashSync(pass_word, 10);
    let checkEmailObj = await user.findOne({
      where: {
        email,
      },
    });

    if (checkEmailObj) {
      failCode(res, email, "Email đã tồn tại");
    } else {
      let result = await user.create({
        full_name,
        email,
        pass_word: passWordHash,
      });
      successCode(res, checkEmailObj, "Tạo user thành công");
    }
  } catch (error) {
    errorCode(res, "Lỗi backend");
  }
};

//LOGIN
const login = async (req, res) => {
  try {
    let { email, pass_word } = req.body;
    const checkEmailLogin = await user.findOne({ where: { email } });

    if (checkEmailLogin) {
      if (checkEmailLogin.pass_word == pass_word) {
        successCode(res, checkEmailLogin, "Login thành công");
      } else {
        failCode(res, "Password không đúng");
      }
    } else {
      failCode(res, "Email không đúng");
    }
  } catch (error) {
    errorCode(res, "Lỗi backend");
  }
};

// common js to run

module.exports = {
  getUser,
  createUser,
  updateUser,

  //SIGNUP user
  signUp,
  login,
};
