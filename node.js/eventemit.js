var events = require('events');

var em =new events.EventEmitter();

var myfunction = function(data1,data2){
    console.log("When events occur,My function is called");
   console.log("Data passed is :" +data1+""+data2);
}

em.on('FirstEvent', myfunction);

em.emit('FirstEvent','data1','data2');