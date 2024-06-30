const mongoose = require('mongoose') 
const studentModel = require("./models/student.model")
/**
 * Write the code to connect with MongoDB
 */

mongoose.connect("mongodb://127.0.0.1/be_demodb")

const db = mongoose.connection //start the connection with MongoDB

db.on("error", ()=> {
    console.log("Error while connecting to DB")
});

db.once("open", ()=>{
console.log("Connected to MongoDB")
init()
})//o/p = connected to MongoDB

async function init(){
    //logic insert in the DB

    const student = {
        name: "Dharmesh",
        age : 99,
        email : "dharmesh@gmail.com",
        subject : ["maths","English"]
    }

   const std_obj = await studentModel.create(student)

   console.log(std_obj) 
}

