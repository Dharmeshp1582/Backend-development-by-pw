var buffer = new Buffer(50);

 buffer.write("Good morning!");
console.log(buffer.toString('utf-8'));

length = buffer.write("Good morning!");
console.log(length)/**13 */