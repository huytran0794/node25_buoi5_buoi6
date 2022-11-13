const Food = require("../models/food");
const Food_Type = require("../models/food_type");
const User = require("../models/user");

const getUser = async (req, res) => {
  try {
    const data = await User.findAll();
    res.send(data);
  } catch (error) {
    res.send(error);
  }
};

const getTitle = (req, res) => {
  res.send("Hello sang, getting title ");
};

// c => POST
const createUser = async (req, res) => {
  try {
    let { full_name, email, passWord } = req.body;
    let checkEmail = await User.findAll({
      where: {
        email,
      },
    });
    // cai nay bat buoc phai co where
    let checkEmailObj = await User.findOne({
      where: {
        email,
      },
    });

    if (checkEmail.length > 0) {
      throw "Email đã tồn tại";
    } else {
      let result = await User.create({
        full_name,
        email,
        passWord,
      });
      res.send(result);
    }
  } catch (error) {
    res.send(error);
  }
};

// u => PUT
const updateUser = async (req, res) => {
  try {
    let { user_id } = req.params;
    let { full_name, email, passWord } = req.body;
    let checkUserObj = await User.findOne({
      where: {
        user_id,
      },
    });

    if (checkUserObj) {
      let result = await User.update(
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
      res.status(200).send("Update thành công !!");
    } else {
      res.status(400).send("User không tồn tại");
    }
  } catch (error) {
    res.status(500).send("Lỗi backend");
  }
};

/* get food controller */
const getFood = async (req, res) => {
  try {
    const data = await Food.findAll({
      include: Food_Type,
    });
    res.send(data);
  } catch (error) {
    res.send(error);
  }
};

// common js to run

module.exports = { getUser, createUser, updateUser, getFood };
