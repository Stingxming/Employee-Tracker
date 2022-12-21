const mysql = require("mysql2");
const inquirer = require("inquirer");
const cTable = require("console.table");

// importing mysql2, inquire and cTable

// Connect to database
const db = mysql.createConnection({
  host: "localhost",
  // MySQL username,
  user: "root",
  // TODO: Add MySQL password here
  password: process.env.MSQL_PASSWORD,
  database: "employee_db",
});

addEmployee = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "firstName",
        message: "What is the employee's first name?",
      },
      {
        type: "input",
        message: "what is the salary for the role",
        name: "salary",
      },
      {
        type: "list",
        message: "what is the department ID?",
        name: "action",
        choices: ["1", "2", "3", "4"],
      },
    ])
    .then((res) => {
      db.query(
        "insert into roles (title, salary, department_id) values(?, ?, ?)",
        [res.title, res.salary, res.department_id],
        (err, data) => {
          console.table(data);
          menu();
        }
      );
    });

  addRole = () => {
    inquirer
      .prompt([
        {
          type: "input",
          message: "what is the role title?",
          name: "name",
        },
        {
          type: "input",
          message: "what is the salary for the role",
          name: "salary",
        },
        {
          type: "list",
          message: "what is the department ID?",
          name: "action",
          choices: ["1", "2", "3", "4"],
        },
      ])
      .then((res) => {
        db.query(
          "insert into roles (title, salary, department_id) values(?, ?, ?)",
          [res.title, res.salary, res.department_id],
          (err, data) => {
            console.table(data);
            menu();
          }
        );
      });

    addDepartment = () => {
      inquirer
        .prompt([
          {
            type: "input",
            message: "what is the role title?",
            name: "name",
          },
          {
            type: "input",
            message: "what is the salary for the role",
            name: "salary",
          },
          {
            type: "list",
            message: "what is the department ID?",
            name: "action",
            choices: ["1", "2", "3", "4"],
          },
        ])
        .then((res) => {
          db.query(
            "insert into roles (title, salary, department_id) values(?, ?, ?)",
            [res.title, res.salary, res.department_id],
            (err, data) => {
              console.table(data);
              menu();
            }
          );
        });
    };
  };
};
