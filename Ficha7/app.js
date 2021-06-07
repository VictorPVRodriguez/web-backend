// importar o express
const { request, response } = require('express');
const express = require('express');
const mysql = require('mysql');

// instanciar o express
const app = express();
// definir a porta do servidor http
const port = 3000;

//Funções middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

var dbConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'password',
    database:'Ficha7'
});

app.get('/persons', (request, response) => {
    dbConnection.query("SELECT * FROM persons", function (error, results, fields) {
        if (error) {
            response.status(404);
            response.end(error.message);
        }
        response.send(results);
    });
});

app.post('/persons', (request, response) => {
    var details = request.body;
    dbConnection.query('INSERT INTO persons set ?', [details], (error, results, fields) => {
        if (error) {
            response.status(404);
            response.end(error.message);
        }
        response.send("Inserted ID is: " + results.insertId);
    });
});

app.delete('/persons/:id', (request, response) => {
    var id = request.params.id;

    dbConnection.query('DELETE FROM persons WHERE ID =' + id, (error, results, fields) => {
        if (error) {
            response.status(404);
            response.end(error.message);
        }
        response.send("Deleted " + results.affectedRows + "entry(s)");
    });
});

app.get('/persons/:id', (request, response) => {
    var id = request.params.id;

    dbConnection.query('SELECT * FROM persons WHERE ID =' + id, (error, results, fields) => {
        if (error) {
            response.status(404);
            response.end(error.message);
        }
        if (results.length == 0) {
            response.status(404);
            response.end('ID not found!');
        }
        else{
            response.send(results);
        }
    });
});

app.get('/persons/:age/:profession', (request, response) => {
    var age = request.params.age;
    var profession = request.params.profession;

    dbConnection.query('SELECT * FROM persons WHERE AGE =? AND PROFESSION =?', [age, profession], (error, results, fields) => {
        if (error) {
            response.status(404);
            response.end(error.message);
        }
        if (results.length == 0) {
            response.status(404);
            response.end('Users not found!');
        }
        else{
            response.send(results);
        }
    });
});

app.put('/persons/:id', (request, response) => {
    var id = request.params.id;
    var details = request.body;

    dbConnection.query('UPDATE persons set ? WHERE ID = ?', [details, id], (error, results, fields) => {
        if (error) {
            response.status(404);
            response.end(error.message);
        }
        if (results.length == 0) {
            response.status(404);
            response.end('ID not found!');
        }
        else{
            details.id = id;
            response.send(results);
        }
    });
});

// método que arranca o servidor http e fica à escuta
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});

