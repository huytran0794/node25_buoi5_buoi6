const sequelize = require("../_old_v1_models/index");
const initModels = require("../models/init-models");

const model = initModels(sequelize);
const { successCode, failCode, errorCode } = require("../config/response");

let { food, food_type, like_res, order, rate_res, restaurant, sub_food, user } =
  model;

/* get food controller */
const getFood = async (req, res) => {
  try {
    const data = await food.findAll({
      include: ["type"],
    });
    // res.send(data);
    successCode(res, data, "Lấy dữ liệu food thành công");
  } catch (error) {
    // res.send(error);
    errorCode(res, "Lỗi backend");
  }
};

/* get like_res controller */
const getLikeRes = async (req, res) => {
  try {
    const data = await like_res.findAll({
      include: ["re", "user"],
    });
    // res.send(data);
    successCode(res, data, "Lấy dữ liệu like res thành công");
  } catch (error) {
    // res.send(error);
    errorCode(res, "Lỗi backend");
  }
};

/* user want to know how many likes restaurant get*/
/* Mỗi thằng user like bao nhiêu nhà hàng, và thông tin chi tiết nhà hàng đó */
const getUserResLike = async (req, res) => {
  try {
    const data = await user.findAll({
      include: ["res_id_restaurants"],
    });
    // res.send(data);
    successCode(res, data, "Lấy dữ liệu user like nhà hàng thành công");
  } catch (error) {
    // res.send(error);
    errorCode(res, "Lỗi backend");
  }
};

/* restaurant want to know how many user give likes*/
/* nhà hàng được bao nhiêu thằng like */

const getRestaurantUserLike = async (req, res) => {
  try {
    const data = await restaurant.findAll({
      include: ["user_id_users"],
    });
    // res.send(data);
    successCode(res, data, "Lấy dữ liệu nhà hàng có user nào like thành công");
  } catch (error) {
    // res.send(error);
    errorCode(res, "Lỗi backend");
  }
};

module.exports = {
  getFood,
  getLikeRes,
  getUserResLike,
  getRestaurantUserLike,
};
