var events = require('events');

var em = new events.EventEmitter();

var myfunction = function(){
    console.log("when events occured ,my function is called");
}

em.on('FirstEvent',myfunction);

em.emit('FirstEvent')