console.log("task1");
console.log("task2");
setTimeout(function() {
    console.log("task3");
},1000);
console.log("task4");/**output:task-1,2,4,3 */