const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler');

const User = require('../models/userModel');

// @route       POST /api/users
// @def         Create user
// @access      Public
const registerUser = asyncHandler(async (req, res) => {
    const { name, password, email } = req.body;

    // if fields are not empty
    if (!name || !email || !password) {
        res.status(400);
        throw new Error('Please add all fields')
    }

    // Check if user exists
    const userExists = await User.findOne({ email });
    if (userExists) {
        res.status(400)
        throw new Error('User already exists')
    }

    // Password hash
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Creating new User
    const user = new User({ name, email, password: hashedPassword });
    await user.save();

    // check if user created
    if (user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid User data!')
    }
})

// @route       POST /api/users/login
// @def         Authenticate User
// @access      Public
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email })

    // Check if User exists and password matches
    if (user && (await bcrypt.compare(password, user.password))) {
        res.status(200).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(400);
        throw new Error('Invalid Credentials')
    }
})

// @route       GET /api/users/me
// @def         Get current User details
// @access      Private
const getUser = asyncHandler(async (req, res) => {
    const { _id, name, email } = await User.findById(req.user.id);
    res.status(200).json({
        id: _id,
        name,
        email
    })
})

// GENERATE JWT
const generateToken = id => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' })
}

module.exports = {
    registerUser,
    loginUser,
    getUser
}