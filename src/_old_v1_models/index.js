// sequelize
const { Sequelize } = require("sequelize");
const config = require("../config/index");
let { db_name, db_user, db_pass, db_host, db_port, db_dialect } = config;
1;

// const sqlizedbOptions = {
//   database: "db_food",
//   username: "root",
//   password: "123456",
//   options: { host: "localhost", port: 3307, dialect: "mysql" },
// };

// const sequelize = new Sequelize("db_food", "root", "123456", {
//   host: "localhost",
//   dialect: "mysql",
//   port: 3307,
// });

// Connect db using config from env file
const sequelize = new Sequelize(db_name, db_user, db_pass, {
  host: db_host,
  port: db_port,
  dialect: db_dialect,
});

try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

module.exports = sequelize;
