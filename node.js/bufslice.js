var buffer1 = new Buffer('TutorialsPoint');
//slicing a buffer
var buffer2 = buffer1.slice(0,8);//tutorial
console.log("buffer2 content: " + buffer2.toString());