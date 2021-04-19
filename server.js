const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const MongoDB_URL = "mongodb+srv://ruiwang:ruiwang2333@cluster0.hb4mf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// set up mongoose
const mongoose = require('mongoose');
mongoose.connect(MongoDB_URL || 'mongodb://localhost:27017/testMongoDB',
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

app.listen(4000)