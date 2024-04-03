const mongoose = require("mongoose"); 
const bcrypt = require("bcryptjs"); 

const StudentSchema = new mongoose.Schema({
    name: { 
       type: String, 
       required: [true, "Please provide name"], 
       minlength: 3, 
       maxlength : 50
    }, 
    phoneNumber: { 
        type: Number, 
        required: [true, "Please provide Phonenumber "], 
        minlength: 10, 
        maxlength : 11
     }, 
 
    email: {
        type: String, 
        required: [true, "Please provide email"], 
        minlength:3, 
        maxlength: 50, 
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Please provide a valid email',
          ],
          unique: true,
    },

    hobbies: { 
        type: Number, 
        required: [true, "Please provide Phonenumber "], 
        minlength: 10, 
        maxlength : 11
     }, 
 
});

module.exports = mongoose.model("student", StudentSchema)

