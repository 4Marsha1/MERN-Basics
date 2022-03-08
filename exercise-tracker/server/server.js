const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const exerciseRoutes = require('./routes/exerciseRoutes');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

const mongodbURI = process.env.ATLAS_URI;
mongoose.connect(mongodbURI)
    .then(() => {
        console.log('Mongo DB connected Successfully');
        app.listen(port, () => console.log(`Server listing at port ${port}`))
    })

app.use(cors());
app.use(express.json());

app.use('/users', userRoutes);
app.use('/exercises', exerciseRoutes);
