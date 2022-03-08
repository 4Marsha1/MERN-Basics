const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors');
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require("./config/db")

const port = process.env.PORT || 5000;
const app = express();

// ---- CONNECT DATABASE ----
connectDB();

// ---- MIDDLEWARES ----
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// ---- ROUTES ----
app.use('/api/goals', require('./routes/goalsRoutes'));

// ---- CUSTOM ERROR HANDLER ----
app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server listening at port ${port}`);
})