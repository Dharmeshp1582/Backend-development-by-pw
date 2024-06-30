function hello(){
    let Name = "Dharmesh"
    console.log(Name)
}

hello() 

console.log(Name)

function outerFn(){
    let outerVar = "I am from the outer function"
    function innerFn(){

 console.log(outerVar)   
 }
 return innerFn 
}

let fn = outerFn()

fn()

//

function customerCounter(){
    let count = 0
    return function(){
        count++
        console.log("New customer counter is" , count)
    }
}

let counter = customerCounter()

counter()
counter()
counter() 