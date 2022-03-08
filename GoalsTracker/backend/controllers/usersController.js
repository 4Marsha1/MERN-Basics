const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

// @route       POST /api/users
// @def         Create user
// @access      Public
const registerUser = asyncHandler(async (req, res) => {
    const { name, password, email } = req.body;
    const user = new User({ name, email, password });
    await user.save();
    res.status(200).json(user)
})

// @route       POST /api/users/login
// @def         Authenticate User
// @access      Public
const loginUser = asyncHandler(async (req, res) => {
    res.status(200).json({ msg: 'Authenticate User' })
})

// @route       GET /api/users/me
// @def         Get current User details
// @access      Private
const getUser = asyncHandler(async (req, res) => {
    res.status(200).json({ msg: 'Get User' })
})

module.exports = {
    registerUser,
    loginUser,
    getUser
}