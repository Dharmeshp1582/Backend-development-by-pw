var mongoose = require("mongoose");
const employeeSchema = new mongoose.Schema({
  name : {
    age: 24,
    required: true
  }
  designation: {
    value : String,
    required: true
  }
})

module.exports =  mongoose.model("Employee", employeeSchema)
