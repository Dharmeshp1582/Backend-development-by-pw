var num =20

if(num % 2==0){
    console.log("even")
}
else{
    console.log("odd") 
}

console.log("after if")

//ternary operator
13%2 == 0 ? console.log("even") : console.log("odd")  //odd

//nested condition

var a = 10

if(a>=0){
    if(a>5){
        console.log("a is greater than 0 and 5")
    }else{
        console.log("a is greater than 0 and a is less than 5")
    }
}else{
    console.log("a is less than 0")
}

//another way 
a >= 0 ? a>5 ? console.log("a is greater than 0 and 5") : console.log("a is greater than 0 but a is less than 5"):
console.log("a is less than 0")

