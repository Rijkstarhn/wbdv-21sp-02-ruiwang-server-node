const express = require('express')
const app = express()
const bodyParser = require('body-parser')

require('dotenv').config();

const uri = process.env.MongoDB_URI;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// set up mongoose
const mongoose = require('mongoose');
// mongoose.connect(uri || 'mongodb://localhost:27017/testMongoDB',
mongoose.connect(uri,
    {useNewUrlParser: true, useUnifiedTopology: true});

// Configures CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});

const demos = require('./controllers/demo-controller');
demos(app)

// const quizzesController = require('./controllers/quizzes-controller');
// quizzesController(app)
require('./controllers/quizzes-controller')(app)
require('./controllers/questions-controller')(app)
require('./controllers/quiz-attempts-controller')(app)

app.listen(process.env.PORT || 4000);