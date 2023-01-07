const inquirer = require("inquirer");
require("console.table");
const db = require("./db");

// importing mysql2, inquire and cTable

// addEmployee = () => {
//   inquirer
//     .prompt([
//       {
//         type: "input",
//         name: "firstName",
//         message: "What is the employee's first name?",
//       },
//       {
//         type: "input",
//         message: "what is the salary for the role",
//         name: "salary",
//       },
//       {
//         type: "list",
//         message: "what is the department ID?",
//         name: "action",
//         choices: ["1", "2", "3", "4"],
//       },
//     ])
//     .then((res) => {
//       db.query(
//         "insert into roles (title, salary, department_id) values(?, ?, ?)",
//         [res.title, res.salary, res.department_id],
//         (err, data) => {
//           console.table(data);
//           menu();
//         }
//       );
//     });

//   addRole = () => {
//     inquirer
//       .prompt([
//         {
//           type: "input",
//           message: "what is the role title?",
//           name: "name",
//         },
//         {
//           type: "input",
//           message: "what is the salary for the role",
//           name: "salary",
//         },
//         {
//           type: "list",
//           message: "what is the department ID?",
//           name: "action",
//           choices: ["1", "2", "3", "4"],
//         },
//       ])
//       .then((res) => {
//         db.query(
//           "insert into roles (title, salary, department_id) values(?, ?, ?)",
//           [res.title, res.salary, res.department_id],
//           (err, data) => {
//             console.table(data);
//             menu();
//           }
//         );
//       });

//     addDepartment = () => {
//       inquirer
//         .prompt([
//           {
//             type: "input",
//             message: "what is the role title?",
//             name: "name",
//           },
//           {
//             type: "input",
//             message: "what is the salary for the role",
//             name: "salary",
//           },
//           {
//             type: "list",
//             message: "what is the department ID?",
//             name: "action",
//             choices: ["1", "2", "3", "4"],
//           },
//         ])
//         .then((res) => {
//           db.query(
//             "insert into roles (title, salary, department_id) values(?, ?, ?)",
//             [res.title, res.salary, res.department_id],
//             (err, data) => {
//               console.table(data);
//               menu();
//             }
//           );
//         });
//     };
//   };
// };
loadPrompts();

function loadPrompts() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "choice",
        message: "What would you like to do?",
        choices: [
          {
            name: "View All Employees",
            value: "VIEW_EMPLOYEES",
          },
          {
            name: "View All Departments",
            value: "VIEW_DEPARTMENTS",
          },
          {
            name: "View All Roles",
            value: "VIEW_ROLES",
          },
          {
            name: "Add A Department",
            value: "ADD_DEPARTMENT",
          },
        ],
      },
    ])
    .then((res) => {
      let choice = res.choice;
      switch (choice) {
        case "VIEW_EMPLOYEES":
          viewEmployees();
          break;
        case "VIEW_DEPARTMENTS":
          viewDepartments();
          break;
        case "VIEW_ROLES":
          viewRoles();
          break;
        case "ADD_DEPARTMENT":
          addDepartment();
          break;
        default:
          quit();
      }
    });
}

// View all employees
function viewEmployees() {
  // query database for employees
  console.log("hello");
  db.findAllEmployees()
    .then(([rows]) => {
      let employees = rows;
      console.table(employees);
    })
    .then(() => loadPrompts());
}

function viewDepartments() {
  // query database for departments
  db.viewAllDepartments()
    .then(([rows]) => {
      let departments = rows;
      console.table(departments);
    })
    .then(() => loadPrompts());
}

function viewRoles() {
  // query database for employees
  db.viewAllRoles()
    .then(([rows]) => {
      let roles = rows;
      console.table(roles);
    })
    .then(() => loadPrompts());
}

function addDepartment() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What department would you like to add?",
      },
    ])
    .then((res) => {
      console.log(res);
      db.createDepartment(res).then(() =>
        console.log("added " + res.name + " to the database")
      );
    });
}
