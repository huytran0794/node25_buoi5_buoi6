const { request, response } = require("express");
const express = require("express");

const app = express();

app.use(express.json());
const cors = require("cors");
app.use(cors());

const rootRoute = require("./routes");

app.listen(8080, () => {
  console.log("Testing");
});

// link to mysql db (engine = innodb)
// const mysql = require("mysql2");
// const conn = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "123456",
//   database: "db_node",
//   port: 3307,
// });

app.use("/api", rootRoute);
// new style: Object relational mapping
//  2 kien truc: sequelize, prisma
// 2 khai niem can biet: codefirst, database first
