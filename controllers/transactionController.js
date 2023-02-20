const Detail = require('../models/walletSchema');
const uniqid = require('uniqid');
const express = require('express');
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:false}))


const depositCash = async (req, res)=>{
    
const {deposit, email} = req.body
var reference =  uniqid()

 function payWithPaystack() {
  var handler = PaystackPop.setup({
    key: 'pk_test_320b6054947065d5fdb2519a0c854b24b3b4a0c9', 
    email: email,
    amount: deposit * 100, 
    currency: 'NGN', 
    ref: reference, 
    callback: function(response) {

      var reference = response.reference;
      alert('Payment complete! Reference: ' + reference);
      
     const filter = { email: email}
     const update = { $inc: {quantity: deposit}} 
     Detail.findOneandUpdate(filter, update);


    },
    onClose: function() {
      alert('Transaction was not completed, window closed.');
    },
  });
  handler.openIframe();
 }




}

const withdraw = async (req, res)=>{



}

module.exports = {depositCash, withdraw};
