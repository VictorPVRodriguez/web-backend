// classe
class Emitter {
    constructor(){
        // propiedade
        this.events = {};
    }
}

// função ou método
Emitter.prototype.on = function (type, listener) {
    if(this.events[type] == undefined){
        this.event[type] = [];
    }
    this.events[type].push(listener);
}

Emitter.prototype.emit = function (type) {
    if(this.events[type] != undefined) {
        this.events[type].array.forEach(function(listener) {
            listener();
        });
    }
}


module.exports = Emitter;