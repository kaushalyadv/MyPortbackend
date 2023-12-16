const express = require('express');
const router = express.Router();
// const User = require('../models/User');
const Message = require('../models/sendMessage')
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
// var fetchuser = require('../middleware/fetchuser');

const JWT_SECRET = "kaushalIsGreat"


// ROUTE : Send a Message using: POST "/api/auth/sendMessage" . No login required
router.post('/sendMessage', [
  body('name', 'Enter a valid name').isLength({ min: 3 }),
  body('email', 'Enter a valid email').isEmail(),
  body('message', 'Message must be in 20 words').isLength({ max: 50 }),
], async (req, res) => {
  let success = false;
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({success,  errors: errors.array() });
    }

    const { name, email, message } = req.body;

    const existingUser = await Message.findOne({ email });
    if (existingUser) {
      // Avoid specifying whether email or password is incorrect
      return res.status(400).json({success,  error: "User with this email already exists" });
    }

    // const salt = await bcrypt.genSalt(10);
    // const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await Message.create({ name, email, message });

    const data = {
      Message:{
        id: Message.id
      }
    }
    const authToken =  jwt.sign(data, JWT_SECRET);


    success = true;
    res.json({success, authToken});

  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});




module.exports = router;
