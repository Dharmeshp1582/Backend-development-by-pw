/**
 * Define the schema of student collection to be stores in the database
 */

const mongoose = require('mongoose')

//schema
const studentSchema = new mongoose.Schema({
    name : {
        type : string,
        required : true,
    },
    age : {
        type : Number,
        min : 19
    },
    email : {
        type : String,
        required : true,
        lowercase : true,
        minlength : 15
    },
    subjects : [string],
    createdAt : {
        type : Date,
        immutable : true,
        default :  () => {
            return Date.now()
        }
    }
})

//Go ahead and create corresponding collection in DB
module.exports = mongoose.model("student", studentSchema) 