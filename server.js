const express = require('express');
const bodyparser = require('body-parser');

// Express app
const app = express();

app.use(bodyparser.json());

// Connection from the database
const connection = require('./client/src/database/Config');


// Route for getting all users
app.get('/api/users', (req, res) => {
    let que = `SELECT * FROM student`;
    let result = connection.query(que, (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        }
        res.json(results);
    });
} );

// Route for creating databases
app.get('/api/createdb', (req, res) => {
    let que = `CREATE DATABASE testDB`;
    connection.query(que, (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        }
        res.send(results);
    });
} );

// Route for getting user password associated with username or email
app.post('/api/users/signauth', (req, res) => {
    let que = `SELECT * FROM ${req.body.type} WHERE ${req.body.type}.Username = "${req.body.username}" OR ${req.body.type}.Email = "${req.body.username}"`;
    connection.query(que, (error, result, fields) => {
        if(error){
            return console.error(error.message);
            res.end();
        }
        console.log(result.length);
        res.json(result);
    } );    
} );


// Route for getting all users
app.get('/api/users/:id', (req, res) => {
    let que = `SELECT Username, Email FROM users.student WHERE Student_ID = ${req.params.id} `;
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