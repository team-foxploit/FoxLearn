const express = require('express');

const app = express();

// Connection from the database
const connection = require('./client/src/database/config');

// Select query
let sql = `SELECT * FROM users.student`;

let result = connection.query(sql, (error, results, fields) => {
    if (error) {
      return console.error(error.message);
    }
    console.log(results);
    
    return results;
    console.log(fields);
    
  });
 
// console.log(result);


app.get('/api/users', (req, res) => {
    const users = [
        {id: 1, fName:'Nikky', lName:'Bela'},
        {id: 2, fName:'Sandler', lName:'Cathy'},
        {id: 3, fName:'Boy', lName:'Chamin'}

    ]
    res.json(result);
} );

connection.end();

const port = 5000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);    
});