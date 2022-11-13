const { DataTypes, Model } = require("sequelize");
const Food_Type = require("./food_type");

const sequelize = require("./index");

class Food extends Model {}
Food.init(
  {
    food_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
      allowNull: false,
    },
    food_name: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.INTEGER,
    },
    desc: {
      type: DataTypes.STRING,
    },
    type_id: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    tableName: "food",
    modelName: "Food",
    timestamps: false,
  }
);

/* định nghĩa relationship cho model (mối quan hệ 1-n: food-food_type) */
/**
 * Create an association that is either 1:m or n:m.
 *
 * ```js
 * // Create a 1:m association between user and project
 * User.hasMany(Project)
 * ```
 * ```js
 * // Create a n:m association between user and project
 * User.hasMany(Project)
 * Project.hasMany(User)
 * ```
 * By default, the name of the join table will be source+target, so in this case projectsusers. This can be
 * overridden by providing either a string or a Model as `through` in the options. If you use a through
 * model with custom attributes, these attributes can be set when adding / setting new associations in two
 * ways. Consider users and projects from before with a join table that stores whether the project has been
 * started yet:
 * ```js
 * class UserProjects extends Model {}
 * UserProjects.init({
 *   started: Sequelize.BOOLEAN
 * }, { sequelize })
 * User.hasMany(Project, { through: UserProjects })
 * Project.hasMany(User, { through: UserProjects })
 * ```
 * ```js
 * jan.addProject(homework, { started: false }) // The homework project is not started yet
 * jan.setProjects([makedinner, doshopping], { started: true}) // Both shopping and dinner have been
 * started
 * ```
 *
 * If you want to set several target instances, but with different attributes you have to set the
 * attributes on the instance, using a property with the name of the through model:
 *
 * ```js
 * p1.userprojects {
 *   started: true
 * }
 * user.setProjects([p1, p2], {started: false}) // The default value is false, but p1 overrides that.
 * ```
 *
 * Similarily, when fetching through a join table with custom attributes, these attributes will be
 * available as an object with the name of the through model.
 * ```js
 * user.getProjects().then(projects => {
 *   const p1 = projects[0]
 *   p1.userprojects.started // Is this project started yet?
 * })
 * ```
 *
 * @param target The model that will be associated with hasOne relationship
 * @param options Options for the association
 */
Food_Type.hasMany(Food, {
  foreignKey: "type_id",
});

Food.belongsTo(Food_Type, {
  foreignKey: "type_id",
});

/* 
    khi truy vấn thằng food này => Có thể lấy được data của Food_type luôn
    tương ứng câu sql:
        + Select * from food join food_type on.....
    Cách làm: bỏ vào trong controller option của findAll: include [danhsach_bang] / include "ten bang"
 */

module.exports = Food;
