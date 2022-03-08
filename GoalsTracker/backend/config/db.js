const mongoose = require('mongoose')
const mongoURI = process.env.MONGO_URI

const connectDB = async () => {
    try {
        const db = await mongoose.connect(mongoURI);
        console.log(`Server connected ${db.connection.host}`.cyan.underline);
    } catch (err) {
        console.log(err.message);
        process.exit(1);
    }
}

module.exports = connectDB