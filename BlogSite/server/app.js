const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const bodyParser = require('body-parser')
const BlogRouter = require('./Routes/blogs')

const port = 5000;
const app = express();
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

const mongoURI = 'mongodb+srv://4Marsha1:test1234@learningmongodb.8zdvz.mongodb.net/LearningMongoDB?retryWrites=true&w=majority'
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('connected to db!');
        app.listen(port, () => console.log(`Server started at port ${port}`))
    })
    .catch(err => console.log(err.message))

app.use('/', BlogRouter)