/**
 * read from an external file
 */

const fs = require('fs')
// console.log(typeof fs)

/**
 * Read in the sync way
 */
// console.log("Before starting to read")

// // const content = fs.readFileSync("input.txt")

// // console.log("Output content is :" +content)

// fs.readFile('input.txt',(err,content)=>{
// if(err){
//     return console.log(err)
// }
// console.log("content of the file is :",content)
// })

// console.log()
// console.log("Last line")

/**
 * Write yhe code to write to an external file
 */
// console.log("Before")
// fs.writeFileSync('output.txt','Hello Students!')
// console.log("After")

console.log("Before")
fs.writeFileSync('output2.txt','Hello Students Again!',err=>{
    if(err){
        return console.log(err)
    }
    console.log("Written successfully")
})
console.log("After")