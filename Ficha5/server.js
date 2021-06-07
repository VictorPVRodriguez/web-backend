// importar o express
const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const { request } = require('http');
const { response } = require('express');

// função para ler um ficheiro com o caminho passado como argumento, de forma assíncrona
function readFileSync(path) {
    var content = fs.readFileSync(path);
    return content;
}

function writeFileSync(path, data) {
    fs.writeFileSync(path, data);
}

// instanciar o express
const app = express();

// definir a porta do servidor http
const port = 3000;


app.use(express.json());
app.use(express.urlencoded({extended: false}));

// default get endpoint
app.get('/', (request,response) => {
    response.send('Hello Postman!')
});

// list all persons endpoint
app.get('/users', (request, response)) => {
    var persons = readFileSync('./persons.json');
    response.send(JSON.parse(persons));
});

app.post('/users', function(request, response){

    var persons = JSON.parse(readFileSync('./persons.json'));

    var length = Object.keys(persons).length;
    var id = ++length;

    var newPerson = req.body;
    newPerson.id = id;

    persons["person" + id] = newPerson;  
    writeFileSync('./persons.json', JSON.stringify(persons));
    
    res.send(persons); 
});

app.delete('/users', function(request, response){
    var persons = JSON.parse(readFileSync('./persons.json'));
    var id = request.params.id;
    var person = persons["person" + id];
    if (person != undefined){
        delete persons["person" + id];
        response.send(persons);
        writeFileSync('./persons.json', JSON.stringify(persons));
    }
    else{
        response.send("Id inexistente");
    }
});

// método que arranca o servidor http e fica à escuta
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});

app.put('/users/:id', (request, response) => {
    var persons = JSON.parse(readFileSync('./persons.json'));
    var id = request.params.id;
    var person = persons["person" + id];
    if (person != undefined) {
        persons["person" + id] = request.body;
        persons["person" + id].id = id;
        writeFileSync('./persons.json', JSON.stringify(persons));
        response.send(persons);
    }
    else{
        response.send("Id inexistente");
    }
});