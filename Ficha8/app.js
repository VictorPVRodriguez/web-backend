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

//JSDoc - Configuration
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            version: "1.0.0",
            title: "Ficha 8 API",
            description: "Ficha 8 API Information",
            contact:{
                name: "TPSI_DWB"
            },
            servers: ["http://localhost:3000"],
        },
        definitions:{
            "Person": {
                "type": "object",
                "properties":{
                    "ID": {
                        "Type": "integer",
                        "x-primary-key": true
                    },
                    "firstname": {
                        "type": "String"
                    },
                    "lastname": {
                        "type": "string"
                    },
                    "profession": {
                        "type": "string"
                    },
                    "age": {
                        "type": "integer",
                        "format": "int64"
                    }
                },
            }
        },
    },
    apis: ["app.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
var dbConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'',
    database:'Ficha7'
});
/** 
 * @swagger
 * /persons:
 *    get:
 *      tags:
 *        - Person
 *      summary: Gets a list of persons
 *      description: Returns a list of persons
 *      produces:
 *          - application/json
 *      responses:
 *          200:
 *              description: An array of persons
 *              schema:
 *              $ref: '#/definitions/Person'
*/
app.get('/persons', (request, response) => {
    dbConnection.query("SELECT * FROM persons", function (error, results, fields) {
        if (error) {
            response.status(404);
            response.end(error.message);
        }
        response.send(results);
    });
});
/** 
 * @swagger
 * /persons:
 *    post:
 *      tags:
 *        - Person
 *      summary: Creates and stores a person
 *      description: Return the id of the created person
 *      produces:
 *              - application/json
 *      parameters:
 *              - name: Model
 *                description: Sample person
 *                in: body
 *                required: true
 *                schema:
 *                  $ref: '#/definitions/Person'
 *      responses:
 *              200:
 *                  description: Successfully created
*/
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
/** 
 * @swagger
 * /persons/{id}:
 *    delete:
 *      tags:
 *        - Person
 *      summary: Deletes a person by id
 *      description: Deletes a single persons by id
 *      produces:
 *        - application/json
 *      parameters:
 *        - name: id
 *          description: Person's id
 *          in: path
 *          required: true
 *          type: string
 *      responses:
 *              200:
 *                description: Successfully deleted
*/
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
/** 
 * @swagger
 * /persons/{id}:
 *     get:
 *      tags:
 *        - Person
 *      summary: Gets a list of persons 
 *      description: Returns a list of persons
 *      produces:
 *          - application/json
 *      parameters:
 *        - name: id
 *          description: Person's id
 *          in: path
 *          required: true
 *          type: string
 *      responses:
 *          200:
 *              description: An array of persons
 *              schema:
 *              $ref: '#/definitions/Person'
*/
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
/** 
 * @swagger
 * /persons/{age}/{profession}:
 *     get:
 *      tags:
 *        - Person
 *      summary: Gets a list of persons 
 *      description: Returns a list of persons
 *      produces:
 *        - application/json
 *      parameters:
 *        - name: age
 *          description: Person's age
 *          in: path
 *          required: true
 *          type: string
 *        - name: profession
 *          description: Person's profession
 *          in: path
 *          required: true
 *          type: string
 *      responses:
 *          200:
 *              description: An array of persons
 *              schema:
 *              $ref: '#/definitions/Person'
*/
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
/** 
 * @swagger
 * /persons/{id}:
 *     put:
 *      tags:
 *        - Person
 *      summary: Update details of a person
 *      description: Returns the id of the updated person
 *      produces:
 *         - application/json
 *      parameters:
 *         - name: id
 *           description: Sample person
 *           in: body
 *           required: true
 *           schema:
 *             $ref: '#/definitions/Person'
 *      responses:
 *              200:
 *                  description: Successfully created
*/
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

