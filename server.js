const express = require('express');
const bodyparser = require('body-parser');

// Express app
const app = express();

app.use(bodyparser.json());

// Connection from the database
const connection = require('./client/src/database/Config');


// Route for getting all users
app.post('/api/users', (req, res) => {
    let que;
    console.log(req.body);
    // TODO: specify which database
    if (typeof(req.body.type) === 'undefined') {
        que = `SELECT * FROM student`;
    } else if (req.body.type === 'usernames') {
        console.log('username selected');
        que = `SELECT Email, Username FROM student`;      
    } else if (req.body.type === 'namecombination') {
        console.log('namecombination selected');
        console.log(req.body);
        que = `SELECT FName, LName FROM student WHERE Student_ID = ${req.body.id}`;      
    }
    let result = connection.query(que, (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        }
        if (req.body.type === 'namecombination'){
            const combination = results[0].FName[0]+results[0].LName[0];
            // console.log(combination);
            results = combination;
        }
        res.json({results});
    });
} );

// TODO : update and fix
// Route for creating databases
app.get('/api/users', (req, res) => {
    let que = `SELECT * FROM student`;
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
        // console.log(result[0].FName);
        res.json(result);
    } );    
} );

// Route for add a new user
app.put('/api/users', (req, res) => {
    console.log(req.body);
    let que = `INSERT INTO STUDENT(FName, LName, Email, Username, PSWRD) VALUES("${req.body.fname}", "${req.body.lname}", "${req.body.email}", "${req.body.username}", "${req.body.password}")`;
    connection.query(que, (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        }
        if(results.affectedRows == 1){
            res.json({status:"success"});
        }else{
            res.json({status:"Fail"});
        }
    });
} );

// Route for getting all users
app.get('/api/users/:id', (req, res) => {
    let que = `SELECT Username, Email FROM users.student WHERE Student_ID = ${req.params.id} `;
    connection.query(que, (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        }
        res.json(results);
    });
} );

// connection.end();

const port = 5000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);    
});