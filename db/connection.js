const mysql = require('mysql');
const util = require('util');


//creates the connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Dv3ga75579dv6380!',
    database: 'employees'
});

//opens the connections
connection.connect();

module.exports = connection;