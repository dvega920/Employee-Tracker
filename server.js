const inquirer = require('inquirer');
const mysql = require('mysql');
const express = require('express');

const app = express();

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

