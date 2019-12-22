//Require packages and assign to variables
const inquirer = require('inquirer');

start();

function start() {
    inquirer.prompt([
        {
            name: "choice",
            type: "list",
            message: "What do you want to do?",
            choices: [
                "Add Department",
                "Add Role",
                "Add Employee",
                "View All Department",
                "View Department Salaries (Combined)",
                "View All Roles",
                "View All Employees",
                "View Employees By Manager",
                "Update Employee Roles",
                "Update Employee Manager",
                "Delete Departement",
                "Delete Role",
                "Delete Employee",
                "Exit",
            ]
        }

    ]).then(answer => {
        if (answer.choice === "Add Employee") {
            console.log("You selected Add Employee");
        }

    })
}