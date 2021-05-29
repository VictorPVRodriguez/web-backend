function started() {
    console.log("Started Download")
}

function update(value) {
    console.log(value + "% of download completed");
}

function completed() {
    console.log("Completed Download")
}

function performDownload(startedF, updateF, completedF) {
    startedF();
    for (let i = 0; i <= 100; i++) {
        updateF(i);
    }
    completedF();
}

//performDownload(started, update, completed);

//=====================================================

var log = require("./log.js");

//log();

console.log(log.message);
console.log(log.functionObj("Hello"));

//=====================================================

var arrayUtils = require("./ArrayUtils.js");
var array = [12, 4, 6, 88, 9, 0];
var otherArray = [7, 10];

console.log("O array está vazio? " + arrayUtils.isEmpty(array));
console.log("O máximo do array é : " + arrayUtils.max(array));
console.log("O mínimo do array é : " + arrayUtils.min(array));
console.log("A média do array é : " + arrayUtils.average(array));

var value = 8989;
console.log("O índice do valor " + value + " é: " + arrayUtils.indexOf(array, value));

var subArray = arrayUtils.subArray(array, 3, 5);
console.log("O sub-array é: " + subArray);

var sameSize = arrayUtils.isSameLength(array, otherArray);
console.log("Os arrays são do mesmo tamanho: " + sameSize);

var invertedArray = arrayUtils.reverse(array);
console.log("O array invertido é: " + invertedArray);

var swappedArray = arrayUtils.swap(array, 0, 4);
console.log("O array alterado é: " + swappedArray);

console.log("O array contém o valor: " + value + "? - " + arrayUtils.contains(array, value));

var concatArray = arrayUtils.concat(array, otherArray);
console.log("O array concatenado é: " + concatArray);



