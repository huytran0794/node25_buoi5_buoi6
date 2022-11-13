// sequelize
const { Sequelize } = require("sequelize");

// const sqlizedbOptions = {
//   database: "db_food",
//   username: "root",
//   password: "123456",
//   options: { host: "localhost", port: 3307, dialect: "mysql" },
// };

const sequelize = new Sequelize("db_test", "root", "123456", {
  host: "localhost",
  dialect: "mysql",
  port: 3307,
});

try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

module.exports = sequelize;
