var a = 10;
var b = 5;
var c = a + b;

console.log(c);

//5

var miniProj = 16;
var freq = 10;
var projFinal = 12;

var notaFinal = miniProj * 0.3 + freq * 0.3 + projFinal * 0.4;

//Propiedade
Math.PI;

//Concatenar uma string
console.log("A avaliação final é :" + Math.round(notaFinal) + " valores");


//6
var month = 2;

switch (month) {
    case 1:
        console.log("Janeiro");
        break;
    case 2:
        console.log("Fevereiro");
        break;
    case 3:
        console.log("Março");
        break;
    case 4:
        console.log("Abril");
        break;
    case 5:
        console.log("Maio");
        break;
    case 6:
        console.log("Junho");
        break;
    case 7:
        console.log("Julho");
        break;
    case 8:
        console.log("Agosto");
        break;
    case 9:
        console.log("Setembro");
        break;
    case 10:
        console.log("Outubre");
        break;
    case 11:
        console.log("Novembro");
        break;
    case 12:
        console.log("Dexembro");
        break;
    default:
        console.log("Mês inválido");
        break;
}

//7

var operador1 = 2;
var operador2 = 3;
var operando = "-";
var resultado = 0;

if (operando == "+") {
    resultado = operador1 + operador2;
    console.log("SOMA");
} 
else if(operando == "-"){
    resultado = operador1 - operador2;
}
else if(operando == "*"){
    resultado = operador1 * operador2;
}
else if(operando == "/"){
    resultado = operador1 / operador2;
}
else if(operando == "^"){
    resultado = operador1 ^ operador2;
    console.log("EXPOENTE");
}

console.log(resultado);

//8

var i = 0;

var d = 3 / 2;
var r = 3 % 2;

console.log("Divisão: " + d);
console.log("Resto:" + r);

while (i <= 20) {
    console.log(i);
    i += 5;
}

for (let j = 0; j <= 20; j++) {
    if (j % 5 == 0) {
        console.log(j);
    }
}

for (let j = 0; j <= 20; j+=5) {
    console.log(j);
}

//9

var sum = 0;

for (let j = 0; j <= 100; j++) {
    sum += j;
}

console.log(sum);

//10

var fact = 1;

for (let j = 1; j <= 3; j++) {
    fact *= j;    
}

console.log(fact);

//11

var array = [1 , 4, 5, 7, 0, 12];

var max = array[0];
for (let i = 1; i < array.length; i++) {
    if (array[i] > max){
        max = array[i];
    }
}
console.log(max);

var min = array[0];
for (let i = 1; i < array.length; i++){
    if (array[i] < min) {
        min = array[i];
    }   
}
console.log(min);

var sum = 0;
var average = 0;
for (let i = 0; i < array.length; i++) {
    sum += array[i];
}
average = sum / array,length;
console.log(average);


