
const mongoose = require("mongoose") ;
const validator = require("validator") ;

const studentSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        trim : true,
        uppercase : true,
        minlength : [3, "invalid name"]
    },
    email : {
        type : String,
        required : true,
        unique : true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("invalid email")
            }
        }
    },
    number : {
        type : Number,
        required : true,
        minlength : [10, "invalid number"],
        unique: true,
    }
    , 
    address : {
        type : String,
        required : true
    }
    ,
    date : {
        type : Date,
        default : Date.now
    }
});

const StudentList = new mongoose.model("StudentList" , studentSchema);

module.exports = StudentList ;