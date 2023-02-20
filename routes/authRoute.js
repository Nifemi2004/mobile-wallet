const express = require('express')
const router = express.Router()

try {
const {registerUser, loginUser} =require('../controllers/authController');

  console.log(registerUser)
  console.log(loginUser)
  router.post('/register', registerUser)
  router.post('/login', loginUser)

} catch (error) {
  console.log(error)
}


module.exports = router
