const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require("../models/userModel");

// @Route           POST /api/users/
// @Desc            Register new User
// @Access          PUBLIC
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        res.status(400);
        throw new Error('Incomplete Fields!');
    }
    const user = await User.findOne({ email: email });
    if (user) {
        res.status(400);
        throw new Error("User Already Exists");
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
        name, email, password: hashedPassword
    })
    await newUser.save();

    if (newUser) {
        res.status(201);
        res.json({
            name, email, password, token: generateToken(newUser.id)
        })
    } else {
        res.status(400);
        throw new Error('User failed to create')
    }

})

// @Route           POST /api/users/login
// @Desc            Authenticate User
// @Access          PUBLIC
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400);
        throw new Error('Incomplete Fields');
    }
    const user = await User.findOne({ email });
    if (!user) {
        res.status(400);
        throw new Error("User doesn't Exist");
    }
    const verify = await bcrypt.compare(password, user.password);
    if (verify) {
        res.json({
            id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user.id)
        })
    } else {
        res.status(400);
        throw new Error("Unauthorised")
    }
})

// @Route           GET /api/users/me
// @Desc            Load user based on token
// @Access          PRIVATE
const getUser = asyncHandler(async (req, res) => {
    const user = req.user;
    if (!user) {
        res.status(400);
        throw new Error('Unauthorised')
    }
    res.status(200).json({
        id: req.user.id,
        name: req.user.name,
        email: req.user.email
    })
})

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' })
}

module.exports = {
    registerUser,
    loginUser,
    getUser
}