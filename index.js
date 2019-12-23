//Require packages and assign to variables
const inquirer = require("inquirer");
const db = require("./db");
require("console.table");

start();

async function start() {
    const { choice } = await inquirer.prompt([
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
                "Update Employee Role",
                "Update Employee Manager",
                "Delete Departement",
                "Delete Role",
                "Delete Employee",
                "Exit",
            ]
        }

    ])
    if (choice === "Add Department") {
        //addDepartment()
    }
    else if (choice === "Add Role") {
        // addRole()
    }
    else if (choice === "Add Employee") {
        // addEmployee()
    }
    else if (choice === "View All Departments") {
        // viewAllDepts()
    }
    else if (choice === "View All Department Salaries (Combined)") {
        // viewDeptSalariesCombined()
    }
    else if (choice === "View All Roles") {
        // viewAllRoles()
    }
    else if (choice === "View All Employees")
        return viewEmployees();

    else if (choice === "View Employees By Manager") {
        // viewEmployeesByManager()
    }
    else if (choice === "Update Employee Role") {
        // updateEmployeeRole()
    }
    else if (choice === "Update Employee Manager") {
        // updateEmployeeManager()
    }
    else if (choice === "Delete Department") {
        // deleteDept()
    }
    else if (choice === "Delete Role") {
        // deleteRole()
    }
    else if (choice === "Delete Employee") {
        // deleteEmployee()
    }
    else if (choice === "Exit") {
        // exit()
    }
}

async function viewEmployees() {
    const employees = await db.findAllEmployees();

    console.log("\n");
    console.table(employees);

    start();
}
