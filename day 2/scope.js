/**
 * global scope
 */

var name = "dharmesh"

console.log(name)

function func(){
    console.log(name) 
}

func()

/**
 * local scope/function scope variable
 */

function func(){
    var num = 35
    console.log(num)
}
func()
//console.log(num) 

/**
 * block scope
 */
{
let x = 20 
console.log(x) 
}

console.log(x) 