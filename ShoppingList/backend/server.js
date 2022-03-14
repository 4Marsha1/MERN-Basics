const express = require('express');
const cors = require("cors");
const dotenv = require('dotenv').config();
const colors = require('colors');
const connectDB = require("./config/db");
const errorHandler = require("./middleware/errorMiddleware");

const port = process.env.NODE_ENV === 'production' ? process.env.PORT : 5000;
const app = express();

// CONNECTION TO DB
connectDB();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// ROUTES
const userRoutes = require('./Routes/userRoutes');
const itemRoutes = require('./Routes/itemRoutes');
app.use('/api/users', userRoutes);
app.use('/api/items', itemRoutes);

// ERROR HANDLER
app.use(errorHandler);

// SETTING UP APP
app.listen(port, () => {
    console.log(`Server listening at port ${port}`.yellow.underline);
})