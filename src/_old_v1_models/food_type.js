const { DataTypes, Model } = require("sequelize");

const sequelize = require("./index");

class Food_Type extends Model {}
Food_Type.init(
  {
    type_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
      allowNull: false,
    },
    type_name: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    tableName: "food_type",
    modelName: "Food_Type",
    timestamps: false,
  }
);

module.exports = Food_Type;
