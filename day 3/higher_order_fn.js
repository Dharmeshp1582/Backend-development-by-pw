// function operation(operatorfn,a,b){
//     return operatorfn(a,b)
// }

// function add(a,b){
//     return a+b 
     
// }

// let result = operation(add, 5, 6)
// console.log(result)

/**
 *function get greet method 
 */

function getGreetMethod(){
    return function(){
        console.log("Hello world")
    }
}

let greetfn = getGreetMethod()
console.log(typeof greetfn) 

greetfn()

