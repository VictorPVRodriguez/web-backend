var log = "HEllo Module!";

var obj = {
    message: "Hello Message",
    functionObj: function (info){
        return "This function outputs " + info;
    }
};

var testFunction = function() {
    return "Hello Function";
};

function ff() {
    console.log("FF");
}

var test = "Hello test";

module.exports = obj;