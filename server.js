const express = require('express');

const app = express();

app.get('/api/users', (req, res) => {
    const users = [
        {id: 1, fName:'Nikky', lName:'Bela'},
        {id: 2, fName:'Sandler', lName:'Cathy'},
        {id: 3, fName:'Boy', lName:'Lila'}

    ]
    res.json(users);
} );

const port = 5000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);    
});