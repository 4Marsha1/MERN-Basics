const express = require('express');
const dotenv = require('dotenv').config();
const cors = require("cors");
const colors = require('colors');

const port = process.env.NODE_ENV === 'production' ? process.env.PORT : 5000;
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// TEST ROUTE
app.get('/', (req, res) => {
    res.send('Hello from server!')
})

app.listen(port, () => {
    console.log(`Server listening at port ${port}`.yellow.underline);
})