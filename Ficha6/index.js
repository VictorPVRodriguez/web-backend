// importar o express
const { request, response } = require('express');
const express = require('express');
const fs = require('fs');
const { nextTick } = require('process');

// instanciar o express
const app = express();
// definir a porta do servidor http
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: false}));

//middleware function
app.use(function (request, response, next) {
    fs.appendFileSync('./log.txt', request.path + ", " + request.method + ": " + new Date() + "\n");
    next();
});

function log(request, response) {
    fs.appendFileSync('./log.txt', request.path + ", " + request.method + ": " + new Date() + "\n");
}

// default get endpoint
app.get('/', (request, response) => {   
    log(request, response); 
    var file = fs.readFileSync("./index.html", 'utf-8');
    var name = request.query.name;
    var profession = request.query,profession;
    file = file.replace('{name}', name);
    file = file.replace('{profession}', profession);
    response.writeHead(200, {
        'Content-Length': Buffer.byteLength(file),
        'Content-Type': 'text/plain'
    }),
    response.end(file);
});

// método que arranca o servidor http e fica à escuta
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    fs.open('log.txt','a', function(err, fd){
        console.log("File was created" + fd);
    });
});

app.get('/log', (request, response) => {   
    var file = fs.readFileSync("./log.txt", 'utf-8');
    response.writeHead(200, {
        'Content-Length': Buffer.byteLength(file),
        'Content-Type': 'text/plain'
    }),
    response.end(file);
});

app.get('/log.txt', (request, response) => {   
    response.download("./log.txt", function(err){
        if (err != undefined) {
            response.status(404);
            response.end("Ocorreu um erro ao ler o ficheiro." + err.message);
        }
        else{
            // Encontrou o ficheiro com sucesso
        }
    })
});

app.get('/clear', (request, response) => {
    fs.unlinkSync('./log.txt');
    response.send("File deleted");
});

app.get('/clear',(request, response) => {

    fs.unlink('./log.txt', function name(err) {
        if (err) {
            response.status(404);
            response.end("Ocorreu um erro ao apagar o ficheiro. " + err.message);
            
        } else {
            response.send("File deleted");
        }
    })
})