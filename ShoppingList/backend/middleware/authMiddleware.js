const asyncHandler = require("express-async-handler");
const jwt = require('jsonwebtoken');
const User = require("../models/userModel")

const protect = asyncHandler(async (req, res, next) => {
    let token;
    try {
        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
            token = req.headers.authorization.split(' ')[1];
        } else {
            res.status(400);
            throw new Error("User Unauthorised");
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id);
        next();
    } catch (err) {
        console.log(err.message)
        res.status(401);
        throw new Error('User Unauthorised');
    }
})

module.exports = protect;