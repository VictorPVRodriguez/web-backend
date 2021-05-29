var arrayUtils = {
    isEmpty: function(array) {
        if (array != undefined && array != null) {
            return array.length == 0;
        }
        else{
            return "Array is undefined";
        }
    },
    max: function(array) {
        var m = array[0];
        for (let i = 1; i < array.length; i++) {
            if (array[i] > m) {
                m = array[i];
            }
        }
        return m;
    },
    min: function(array) {
        var m = array[0];
        for (let i = 1; i < array.length; i++) {
            if (array[i] < m) {
                m = array[i];
            }
        }
        return m;
    },
    average: function(array) {
        var sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum+= array[i];
        }
        var avg = sum / array.length;
        return avg;
    },
    indexOf: function (array, value) {
        for (let i = 0; i < array.length; i++) {
            if (value == array[i]) {
                return i;
            }
        }
        return -1;
    },
    subArray: function (array, starIndex, endIndex) {
        var a = [];
        for (let i = starIndex; i <= endIndex; i++) {
            a.push(array[i]);
        }
        return a;
    },
    isSameLength: function (array, otherArray) {
        return array.length == otherArray.length;
    },
    reverse: function (array) {
        return array.reverse();
    },
    swap: function (array, index1, index2) {
        //obter um valor que está num determinado indice no array
        var val1 = array[index1];
        var val2 = array[index2];

        //alterar um determinado indice com outro valor
        array[index1] = val2;
        array[index2] = val1;

        return array;
    },
    contains: function (array, value) {
        return this.indexOf(array, value) != -1;
    },
    concat: function (array, otherArray) {
        var concatArray = array;
        for (let index = 0; index < otherArray.length; index++) {
            concatArray.push(otherArray[i]);
        }
        return concatArray;
    }
};

module.exports = arrayUtils;







