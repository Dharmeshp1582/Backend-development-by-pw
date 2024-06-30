/**
 * var:
 *  1. it's used to define a variable
 *  2. it has functions scope but no block scope
 *  3. it is hoisted
 */

// function f1(){
//     var i=5
//     console.log(i)
// }

// f1()
// console.log(i)

// console.log(i) 
// var i = 23
 
// console.log(i)

/**
 * let:
 * 
 * 1. no hoisting
 * 2.it also has block scope
 */

// console.log(i)

// let i=5
// {
//     let name = "dharmesh"
// }

// console.log(name)

/**
 * const
 *  1.scope is exactly same as let and var
 *  2.const variables are final , can't be re-assigned a value
 */

const country = "India"
country  = "USA"