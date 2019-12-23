//Require packages and assign to variables
const inquirer = require("inquirer");
const db = require("./db");
const cTable = require("console.table");

start();

async function start() {

    //assigns user choice to choice variable. returns a promise. 
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

    /* 
    if statements check for user input and runs the function depending on the choice the user made. Only got view all employees to run.
    still need to create addt'l functions in ./db/index.js file.
    */

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
        return viewEmployees(); // returns a table with all employee data.

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
        exit()

    }
}

//promisified connection.query waiting for response from database being queried in ./db/index.js dir queryAllEmployees()
async function viewEmployees() {
    const employees = await db.queryAllEmployees();

    //new line tag
    console.log("\n");

    //prints result(s) in a table format in the CLI. 
    console.table(employees);

    //restarts function after results print out to select additional queries.
    start();
}

//exits the app sends user message and ends connection. 
function exit() {
    const quit = db.quit();
    return quit;
}
