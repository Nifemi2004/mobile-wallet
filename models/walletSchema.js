const mongoose = require('mongoose');
const validator = require('validator');

const walletSchema = new mongoose.Schema ({
    accEmail:{
        type: String,
        unique: true,
        required: [true, 'Please provide email'],
        validate: {
          validator: validator.isEmail,
          message: 'Please provide valid email'
    }},
    accBalance: {
        type: Number,
        required: [true]
    },
    accHistory: {
        string: String
    }
})

module.exports = mongoose.model('Detail', walletSchema)
