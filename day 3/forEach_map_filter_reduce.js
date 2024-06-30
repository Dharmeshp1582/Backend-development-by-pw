/**
 * forEach method */ 

let players = ["sachin" , "virat","Dhoni","rohit"]

players.forEach((player) => console.log(player))

/**
 * map -> creation of new transformated array
 */

let arr = [1,2,3,4,5,6]

let cube_arr = arr.map(num => num*3)
console.log(cube_arr)
console.log(arr)

/**
 * Filter ->
 */

let arr1 = [1,2,3,4,5,6,7,8,9,10,11,12]

let even_arr = arr1.filter((num) => num%2 == 0)
console.log(even_arr) //2,4,6,8,10,12

let odd_arr = arr1.filter((num) => num%2 != 0)
console.log(odd_arr)  //1,3,5,,7,9,11

/**
 * reduce -> apply reduce for reducing the data array
 */

const sum = [1,2,3,4,5,6,7,8,9,10].reduce((curr,next) => curr + next)
console.log(sum)  