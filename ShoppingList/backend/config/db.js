const mongoose = require('mongoose');
const uri = process.env.MONGO_URI;

const connectDB = async () => {
    try {
        const db = await mongoose.connect(uri);
        console.log(`MongoDB connected ${db.connection.host}`.cyan.underline);
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}

module.exports = connectDB;