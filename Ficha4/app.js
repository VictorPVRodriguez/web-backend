var person = {
    name: "David",
    age: 23,
    gender: "male"
};

var personAsJSON = JSON.stringify(person);

var property = "name";

console.log(person[property]);

console.log(personAsJSON.age);

var personAsObject = JSON.parse('{"name":"David","age":23,"gender":"male"}');

console.log(personAsObject.name);

//==========================================================================

var Emitter = require("./emitter.js");
var constants = require("./config.js");

//Criação de uma nova instância da classe Emitter
var emitter = new Emitter();

//invocação do método ON
emitter.on(constants.events.LOGIN,function(user) {
    console.log("O evento login 1 foi despoletado");
});

//invocação do método ON
emitter.on(constants.events.LOGIN,function() {
    console.log("O evento login 2 foi despoletado");
});

emitter.on(constants.events.LOGOUT,function() {
    console.log("O evento logout foi despoletado");
});


emitter.on(constants.events.LOGIN);
emitter.on(constants.events.LOGOUT);






