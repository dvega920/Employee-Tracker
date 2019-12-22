//Require packages and assign to variables

const inquirer = require('inquirer');
const mysql = require('mysql');
// const express = require('express');

//express method stored in "app" variable.
// const app = express();

//configures the port server will listen to
const PORT = process.env.PORT || 8080;

//Need to prompt users via inquirer



//creates the connection and stores in "connection" variable
// const connection = mysql.createConnection({
//     host: 'localhost',
//     port: 3306,
//     user: 'root',
//     password: 'dvega75579dv6380', //ask Kyle..."how do we hide this again"
//     database: ''
// })

// app.get("/", (req, res) => {
//     return res.send('You are connected!');
// })

//open the connection
// connection.connect();



//end the connection
// connection.end();

//server listening...
// app.listen(PORT, () => {
//     console.log(`Server is listening on port ${PORT}`);
// });


/* NEED TO FIX questions array. Cannot get arrows to work to select choices.
*/
const questions = {
    type: "list",
    name: "choices",
    message: "What do you want to do?",
    choices: [
        {
            allemployees: "View All employees"
        },
        { allemployeesdept: "View All employees by Department" },
        "View All employees by Manager",
        "Add Employee",
        "Remove Employee"
    ]
};
inquirer.prompt(questions);
