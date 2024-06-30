function hellostudents(){
    console.log("Hello students!");
}

hellostudents()

/**
 * i want to find out sum of 2 numbers
 */

function sum(a,b){
    return a+b;
}

console.log(sum(6,4))
console.log(sum(6))//NaN 



function func(){
console.log(arguments)
}

func(1,2,5,7)