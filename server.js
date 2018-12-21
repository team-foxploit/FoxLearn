const express = require('express');

// Express app
const app = express();

// Connection from the database
const connection = require('./client/src/database/Config');

// Route for getting all users
app.get('/api/users', (req, res) => {
    let que = `SELECT * FROM student`;
    let result = connection.query(que, (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        }
        res.send(results);
    });
} );

// Route for creating databases
app.get('/api/createdb', (req, res)=> {
    let que = `CREATE DATABASE testDB`;
    connection.query(que, (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        }
        res.send(results);
    });
} );


// Route for getting all users
app.get('/api/users/:id', (req, res) => {
    let que = `SELECT * FROM users.student WHERE Student_ID = ${req.params.id} `;
    connection.query(que, (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        }
        res.send(results);
    });
} );

// connection.end();

const port = 5000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);    
});