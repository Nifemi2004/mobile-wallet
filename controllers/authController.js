const User = require('../models/user');
const Detail = require('../models/walletSchema');
const express = require('express');
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:false}))
const bcrypt = require('bcrypt');
const saltRounds = 15



const registerUser = async (req, res) =>{
 


   const {username, password, surname, firstname, email, dob} = req.body

    
  bcrypt.hash(password, saltRounds, function(err, hash) {
    console.log('!!',req.body);
    const newUser = new User({
        userUsername: username,
        userPassword: hash,
        userLastname: surname,
        userFirstname: firstname,
        userEmail: email,
        userDOB: dob,

    });
    
    newUser.save((err)=>{
        if (err){
            console.log(err)
        }else{
            
         const newDetail = new Detail({
         accEmail:email,
         accBalance: 0,
         accHistory: {}
  
      });
      
      newDetail.save((err)=>{
          if (err){
              console.log(err)
          }else{
     res.render('home');
}});

}});
})
}

const loginUser = async (req, res) =>{

 const {username, password} = req.body
  
    User.findOne({userUsername: username}, (err, foundUser) => {
      if(err) {
       console.log(err);
     } else {
      if(foundUser){
          bcrypt.compare(password, foundUser.userPassword, function(err, result) {
           if ( result === true){
            res.render('home');
           }
           
          });
      };
      };
     });
}

module.exports = {registerUser, loginUser};