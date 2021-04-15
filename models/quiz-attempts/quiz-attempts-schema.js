const mongoose = require('mongoose');
const questionSchema = require("../questions/questions-schema");

const quizAttempts = mongoose.Schema({
    _id: String,
    score: Number,
    quiz: {type: String, ref: 'QuizzesModel'},
    answer: [questionSchema]
}, {collection: 'quizAttempts'});

module.exports = quizAttempts;