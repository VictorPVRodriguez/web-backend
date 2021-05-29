//1. 
//assinatura da função
function calculateIMC(weight, height) {
    var imc = weight/Math.pow(height,2);
    return imc;
}

function logIMC(weight, height) {
    var imc = calculateIMC(weight, height);
    if(imc < 18.5){
        console.log("IMC: " + imc + " - Está abaixo do peso!");
    }
    else if(imc >= 18.5 && imc < 25){
        console.log("IMC: " + imc + " - Está no peso normal!");
    }
    else if(imc >= 25 && imc < 30){
        console.log("IMC: " + imc + " - Está acima do peso!");
    }
    else{
        console.log("IMC: " + imc + " - Está obeso!");
    }
}

var imc = calculateIMC(80, 2);

console.log(imc);

logIMC(200, 2);

//2.
function invertWord(str){
    var inv = "";
    for (let index = str.length -1; index >= 0 ; index--) {
        inv+=str[index];
    }
    return inv;
}

function invertString(str, pattern){
    var inv = "";
    var split = str.split(pattern);
    for (let index = 0; index < split.length; index++) {
        var word = invertWord(split[index]);
        inv += word + pattern;
    }
    return inv;
}

var invertedStr = invertString("Hoje,e,Domingo", ",");
console.log(invertedStr);

var pattern = "-"

str.split(pattern);

//3.
function countConsonants(str) {
    var count = 0;
    var vogals = ["a", "e", "i", "o", "u"];

    for (let index = 0; index < str.length; index++) {
        for (let j = 0; j < vogals.length; j++) {
            if (str[index] != vogals[j]) {
                count++;
            }   
        }
    }
    return count;
}

function countVogals(str) {
    var count = 0;
    for (let index = 0; index < str.length; index++) {
        if (str[index] == "a" || str[index] == "e" || str[index] == "i" || str[index] == "o" || str[index] == "u") {
            count++;
        }
    }
    return count;
}
    
var vogals = countVogals("Hello");
console.log(vogals);

//4.
function countLetter(str, letter) {
    str = str.toLowerCase();
    var count = 0;
    for (let index = 0; index < str.length; index++) {
        if (str[index] == letter) {
            count++;
        }
    }
    return count;
}

var count = countLetter ("HellE", "e");
console.log(count);

//5.
function calculateWorkingHours(he, me, se, hs, ms, ss) {
    
    if (he < 8 || hs > 18) {
        console.log("Horário não permitido!!!")
        return;
    }

    var enterInSeconds = he * 3600 + me * 60 + se;
    var exitInSeconds = hs * 3600 + ms * 60 + ss;

    var timeInSeconds = exitInSeconds - enterInSeconds;

    var remainderHour = timeInSeconds % 3600;
    var hours = (timeInSeconds - remainderHour) / 3600;
    var remainderMinutes = remainderHour % 60;
    var minutes = (remainderHour - remainderMinutes) / 60;

    console.log("Tempo de trabalho: " + hours + ":" + minutes + ":" + remainderMinutes);

}
calculateWorkingHours(7,35,0,16,0,30);

//6.
function drawRectangle(width, height) {
    for (let j = 0; j < height; j++) {
        var line = "";
        for (let i = 0; i < width; i++) {
            line += "*";
            count++
        }
        console.log(line);
    }
}
drawRectangle(5, 3);

//7.
function drawTriangle(height) {
    var line = "";
    for (let j = 1; j <= height; j++) {
        line += "*"
        console.log(line);
    }
}
drawTriangle(10);

//8.
function drawBox(width, height) {
    for (let j = 0; j < height; j++) {
        var line = "";
        for (let i = 0; i < width; i++) {
            if (j == 0 || j == height -1 || i == 0 || i == width -1) {
                line += "*";
            }
            else{
                line += " ";
            }
        }
        console.log(line);
    }
}
console.log("");
drawBox(10, 10);

//9. 
var student1 = {firstName: "Pedro", lastName: "Marques", age: 20, grade: 16.5, getGrade: function(){
    return this.firstName + " " + this.lastName + "com idade: " + this.age + "teve: " + this.grade
}};
var student2 = {firstName: "David", lastName: "Tiago", age: 25, grade: 15.5, getGrade: function(){
    return this.firstName + " " + this.lastName + "com idade: " + this.age + "teve: " + this.grade
}};
var student3 = {firstName: "Sofia", lastName: "Bond", age: 23, grade: 10.5, getGrade: function(){
    return this.firstName + " " + this.lastName + "com idade: " + this.age + "teve: " + this.grade
}};
var student4 = {firstName: "Marco", lastName: "Saint", age: 21, grade: 9.5, getGrade: function(){
    return this.firstName + " " + this.lastName + "com idade: " + this.age + "teve: " + this.grade
}};
var student5 = {firstName: "André", lastName: "Raúl", age: 19, grade: 6.5, getGrade: function(){
    return this.firstName + " " + this.lastName + "com idade: " + this.age + "teve: " + this.grade
}};
var student6 = {firstName: "Ana", lastName: "Duarte", age: 18, grade: 18.5, getGrade: function(){
    return this.firstName + " " + this.lastName + "com idade: " + this.age + "teve: " + this.grade
}};
var student7 = {firstName: "Joana", lastName: "Matos", age: 30, grade: 18.5, getGrade: function(){
    return this.firstName + " " + this.lastName + "com idade: " + this.age + "teve: " + this.grade
}};
var student8 = {firstName: "Paulo", lastName: "Figueira", age: 40, grade: 20, getGrade: function(){
    return this.firstName + " " + this.lastName + "com idade: " + this.age + "teve: " + this.grade
}};
var student9 = {firstName: "Ivan", lastName: "Santos", age: 28, grade: 1, getGrade: function(){
    return this.firstName + " " + this.lastName + "com idade: " + this.age + "teve: " + this.grade
}};

var studentList = [];

function displayGrades(array) {
    for (let i = 0; i < array.length; i++) {
        const student = array[i];
        console.log(student.firstName + " " + student.lastName + "com idade: " + student.age + "teve: " + student.grade);
    }
}

console.log("Alínea 9");
displayGrades(studentList);

function getBestGrade(array) {
    var max = array[0].grade;
    for (let i = 1; i < array.length; i++) {
        if (array[i].grade > max) {
            max = array[i].grade;
        }
    }
    return max;
}

var bestGrade = getBestGrade(studentList);
console.log();
console.log("Melhor aluno");
console.log(bestGrade.getGrade());

//pior nota
function worstGrade(array) {
    var min = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i].grade < min.grade) {
            min = array[i];
        }
    }
    return min;
}
var mynote = worstGrade(studentarray);
console.log(' ');
console.log('pior nota');
console.log(mynote.getGrade());

//verificação da nota negativa
function negativeNote(array) {
    console.log(" ");
    console.log("Nota negativas");
    console.log(" ");
    for (let i = 0; i < array.length; i++) {
        const student = array[i];
        if (array[i].grade < 9.5) {
            console.log(student.getGrade())
        }
    }
}
var negGrade = negativeGrade(studentarray);

function getAverage(array) {
    var average = 0;
    for (let i = 0; i < array.length; i++) {
        average += array[i].grade;
    }
    average = average / array.length;
    return average;
}

//Verificação da nota positiva
function positiveGrade(array) {
    console.log(" ");
    console.log("Nota positiva");
    console.log(" ");
    for (let i = 0; i < array.length; i++) {
        const student = array[i];
        
        if (array[i].grade > 9.5) {
            console.log(student.getGrade());
        }
    }
}
var posGrade = positiveGrade(studentarray);

function getClosestFromAverage(array) {
    var average = getAverage(array);
    var min = array[0];
    var index = 0;
    for (let i = 0; i < array.length; i++) {
        var diff = Math.abs(array[i].grade - average);
        if (diff < min) {
            min = diff;
            index = i;
        }
    }
    return array[index];
}

















