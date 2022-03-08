const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require("../models/userModel");

const protect = asyncHandler(async (req, res, next) => {
    let token
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            // Get TOKEN from header
            token = req.headers.authorization.split(' ')[1];
            // Verify TOKEN
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            // Get USER from the token
            const decodeduser = await User.findById(decoded.id).select('-password')
            req.user = decodeduser

            next()
        } catch (err) {
            console.log(err.message);
            res.status(401)
            throw new Error('Not Authorized')
        }
    }
    if (!token) {
        res.status(401)
        throw new Error('Not Authorized, no token')
    }
})

module.exports = { protect }