const mongoose = require('mongoose')
const validator = require('validator');

const userSchema = new mongoose.Schema ({
    userLastname: {
        type: String,
        required: [true]
    },
    userFirstname:{
        type: String,
        required: [true]
    },
    userEmail:{
        type: String,
        unique: true,
        required: [true, 'Please provide email'],
        validate: {
          validator: validator.isEmail,
          message: 'Please provide valid email'
    }
},
    userDOB:{
        type: String,
        required: [true, 'Please provide DOB']
    },
    userUsername: {
        type: String,
        required: [true, 'Please provide username']
    },
    userPassword: {
        type: String,
        required: [true, 'Please provide password'],
        minlength: 6

    }
})


module.exports = new mongoose.model("User", userSchema);
