const Person = require('../sequelize').Person;

exports.getPersons = function (req, res, next) {  // Rota vai ter que usar isto
    Person.findAll()
    .then(result => {
        // res.send(result);
        res.render('person', { title: 'Person', text: "This is a test", data: result });
    })

};