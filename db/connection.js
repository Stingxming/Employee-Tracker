const mysql = require("mysql2");
require("dotenv").config();

// Connect to database
const db = mysql.createConnection({
  host: "localhost",
  // MySQL username,
  user: "root",
  // TODO: Add MySQL password here
  password: process.env.MSQL_PASSWORD,
  database: "employees_db",
});

db.connect(function (err) {
  console.log("db connected");
  if (err) throw err;
});

module.exports = db;
