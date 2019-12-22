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
        if (answer.choice === "Add Department") {
            // console.log("You selected Add Employee");  Used to test functionality. replace with addDept();
        }
        else if (answer.choice === "") {
            // addDept()
        }
        else if (answer.choice === "") {
            // addRole()
        }
        else if (answer.choice === "") {
            // addEmployee()
        }
        else if (answer.choice === "") {
            // viewAllDept()
        }
        else if (answer.choice === "") {
            // viewDeptSalariesCombined()
        }
        else if (answer.choice === "") {
            // viewAllRoles()
        }
        else if (answer.choice === "") {
            // viewAllEmployees()
        }
        else if (answer.choice === "") {
            // viewEmployeesByManager()
        }
        else if (answer.choice === "") {
            // updateEmployeeRoles()
        }
        else if (answer.choice === "") {
            // updateEmployeeManager()
        }
        else if (answer.choice === "") {
            // deleteDept()
        }
        else if (answer.choice === "") {
            // deleteRole()
        }
        else if (answer.choice === "") {
            // deleteEmployee()
        }
        else if (answer.choice === "") {
            // exit()
        }


    })
}