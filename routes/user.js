const express = require('express')
const router = express.Router()

// Controller functions 
const {signupUser, loginUser} = require('../controllers/userController')


// Login Route
router.post('https://triviahhh-backend.onrender.com/login', loginUser)


// Signup Route
router.post('/signup', signupUser)



module.exports = router