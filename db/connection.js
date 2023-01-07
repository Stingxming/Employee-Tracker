const mysql = require("mysql2");
require("dotenv").config();
console.log(process.env.MSQL_PASSWORD);
// Connect to database
const db = mysql.createConnection({
  host: "localhost",
  // MySQL username,
  user: "root",
  // TODO: Add MySQL password here
  password: "Nazikill4r!",
  database: "employees_db",
});

db.connect(function (err) {
  if (err) throw err;
});

module.exports = db;
