const { DataTypes, Model } = require("sequelize");

const sequelize = require("./index");

class User extends Model {}
User.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
      allowNull: false,
    },
    full_name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          msg: "Email không đúng định dạng",
        },
      },
    },
    passWord: {
      field: "pass_word",
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    tableName: "user",
    modelName: "User",
    timestamps: false,
  }
);

module.exports = User;
