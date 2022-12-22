const mysql = require("mysql2");

// Connect to database
const db = mysql.createConnection({
  host: "localhost",
  // MySQL username,
  user: "root",
  // TODO: Add MySQL password here
  password: process.env.MSQL_PASSWORD,
  database: "employee_db",
});

db.connect(function (err) {
  if (err) throw err;
});

module.exports = db;
