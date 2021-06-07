// importar o express
const { request, response, query } = require('express');
const express = require('express');
const mysql = require('mysql2');
const { where } = require('sequelize');
const Sequelize = require('sequelize');

const swaggerUI = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

// instanciar o express
const app = express();
// definir a porta do servidor http
const port = 3000;

//Sequelize
const sequelize = new Sequelize('Ficha9', 'root', '', {
    dialect:'mysql'
});
sequelize.authenticate()
    .then(() => {
        console.log("Connection has been established");
    })
    .catch(err => {
        console.error("Unable to connect", err);
    });

//Funções middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

//Define Model
const Person = sequelize.define('person',{
    //attributes
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName:{
        type: Sequelize.STRING,
        allowNull: false
    },
    profession: {
        type: Sequelize.STRING,
        allowNull: false
        
    },
    age: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, {
    // options
});

sequelize.sync({ force: false})
    .then(() => {
        console.log('Database & tables creates!');  
    }).then(function () {
        return Person.findAll();
    }).then(function(persons){
        console.log(persons);
    });

Person.bulkCreate([
    { firstName: 'Pedro', lastName: 'Jardim', profession: 'IT', age:62 },
    { firstName: 'Manuel', lastName: 'Matos', profession: 'IT', age:12 },
    { firstName: 'Maria', lastName: 'Figueira', profession: 'IT', age:32 },
    { firstName: 'Ana', lastName: 'Duarte', profession: 'IT', age:82 },
    { firstName: 'Luis', lastName: 'Faria', profession: 'IT', age:42 }
]).then(function () {
    return Person.findAll();
}).then(function(persons){
    console.log(persons);
});

// Find all users
app.get('/persons', (request, response) => {
    Person.findAll().then(person => {
        response.send(person);
    })
});

// Create a new user
app.post('/persons', (request, response) => {
    var details = request.body;
    Person.create(details).then(person => {
        response.send(person)
    })
});

// Delete person in body
app.delete('/person/:id', (request, response) => {
    Person.destroy({
        where: {
            id: request.body.id
        }
    }).then(count => {
        if (!count) {
            return response.status(404).send({error: 'No user'});
        }
        response.status(204).send(); 
    })
});

// Delete person in Params
app.delete('/person/:id', (request, response)=>{
    Person.destroy({
        where: {
            id: request.params.id
        }
    }).then(count => {
        if (!count) {
            return response.status(404).send({error: 'No user'});
        }
        response.status(204).send();
    })
});

// Delete person in Query
app.delete('/person/:id', (request, response)=>{
    Person.destroy({
        where: {
            id: request.query.id
        }
    }).then(count => {
        if (!count) {
            return response.status(404).send({error: 'No user'});
        }
        response.status(204).send();
    })
});

// método que arranca o servidor http e fica à escuta
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
