/**
 * Define the schema of student collection to be stores in the database
 */

const mongoose = require('mongoose')

//schema
const studentSchema = new mongoose.Schema({
    name : string,
    age : Number
})

//Go ahead and create corresponding collection in DB
module.exports = mongoose.model("student", studentSchema) 