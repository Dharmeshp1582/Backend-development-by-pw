/**
 * string
 *  --string is a sequence of characters
 */

let Name = "Dharmesh"

let city = "surat"

console.log(Name, city)
console.log(typeof Name)

/**
 * accessing characters based on index 
 */

console.log(Name[0])//D
console.log(city[2])//r
console.log(Name[11])//undefined

Name[2] = "M"
console.log(Name) 

console.log(Name.length)

let first_name ="Dharmesh"
let last_name ="patel"

let full_name = first_name.concat(last_name) 
console.log(full_name)  

/**
 * convert lower into uppercase 
 */

console.log(full_name.toUpperCase()) //DHARMESHPATEL
console.log(full_name.toLowerCase())

/**
 * characters at any index str[i]
 */

console.log(Name.charAt(3))//r

/**
 * slicing
 */

console.log(full_name)
console.log(full_name.slice(0))//Dharmeshpatel
console.log(full_name.slice(2))//armeshpatel
console.log(full_name.slice(3))//rmeshpatel
console.log(full_name.slice(-5))//patel
console.log(full_name.slice(-5,-1)) //pate

/**
 * indexof
 */

console.log(Name.indexOf('h'))//11

/**
 * trim
 */

let word = "Dharmesh"
console.log(word)
console.log(word.trim())//

/**
 * split
 */

console.log(Name.split(""))