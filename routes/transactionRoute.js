const express = require('express')
const router = express.Router()

try {
    const {depositCash, withdraw}= require('../controllers/transactionController');
console.log(depositCash)

router.post('/deposit', depositCash)
} catch (error) {
    console.log('there is an error');
}


module.exports = router;