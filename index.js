//Require packages and assign to variables
const inquirer = require('inquirer');
const util = require('util');
// const cTable = require("console.table");

start();

function start() {
    const questions = inquirer.prompt([
        {
            type: "list",
            name: "choice",
            message: "What do you want to do?",
            choices: [
                {
                    name: "Add Department",
                    value: "Add_Dept",
                },
                {
                    name: "Add Role",
                    value: "Add_Role"
                },
                {
                    name: "Add Employee",
                    value: "Add_Emp"
                },
                {
                    name: "View All Department",
                    value: "View_All_Dept"
                },
                {
                    name: "View Department Salaries (Combined)",
                    value: "View_Dept_Salaries_Combined"
                },
                {
                    name: "View All Roles",
                    value: "View_All_Roles"
                },
                {
                    name: "View All Employees",
                    value: "View_All_Emp"
                },
                {
                    name: "View Employees By Manager",
                    value: "View_Emp_By_Mgr"
                },
                {
                    name: "Update Employee Roles",
                    value: "Updated_Emp_Roles"
                },
                {
                    name: "Update Employee Manager",
                    value: "Update_Emp_Mgr"
                },
                {
                    name: "Delete Departement",
                    value: "Delete_Dept"
                },
                {
                    name: "Delete Role",
                    value: "Delete_Role"
                },
                {
                    name: "Delete Employee",
                    value: "Delete_Emp"
                },
                {
                    name: "Exit",
                    value: "exit"
                }
            ]
        }

    ]).then(answers => {
        console.table(answers)
    })
}