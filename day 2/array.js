// arr = [1,2,3]

// console.log(typeof arr)

// arr1 = new Array()

// console.log(typeof arr1)
// console.log(arr1) 

arr =[1,2,3,4,5,6,7,8,9,5,22,12,24]

console.log(arr[0])
console.log(arr[1]) 

console.log(arr[7])

console.log(arr[0,5-1])

/**
 * Insert items in the rows
 */

arr = [1,3,8,9,7,3]
console.log(arr)

arr.push(11)
console.log(arr)

arr.push(99,108,100)
console.log(arr)


//ushift method
arr.unshift(999)
console.log(arr)

arr.unshift(9,99,999) 
console.log(arr)

let a1 = [1,2,3]
let a2 = [5,6]

let r = a1.concat(a2) 
console.log(r) 

console.log(a1.length) 

/**
 * convert array into strings 
 */

// char_arr = [ 'D','H','A','R','M','E','S','H',' ','P','A','T','E','L']

// //join
// console.log(char_arr.join())
// console.log(char_arr.join(""))
// console.log(char_arr.join('$ '))

// console.log(typeof char_arr.toString())


//slicing of the array

// let num = [3,4,5,6,7,8,9,10,11,12,13]

// console.log(num.slice(2))
// console.log(num.slice(2,7))
// console.log(num.slice(5,-1))
// console.log(num.slice(-9,-2))
// console.log(num.slice(2,-1))

// console.log(num)

/**
 * splicing ,which modifies the given array
//  */

// let numbers = [1,2,3,4,5]
// let removes = numbers.splice(2,2,11,12,13)
// console.log(removes)
// console.log(numbers)


/**
 * REVERSE the given array
 */

// let nums = [1,2,3,4,5]
// nums.reverse()
// console.log(nums)

let nums = [6,3,5,6,4,3,9] 
console.log(nums.indexOf(21)) 

/**
 * sorting of the given array
 */

let my_arr = [15,234,6,72,8]
//my_arr.sort((a,b)=> a-b)//increment order sorting
my_arr.sort((a,b)=> b-a)//decrement order sorting
console.log(my_arr) 