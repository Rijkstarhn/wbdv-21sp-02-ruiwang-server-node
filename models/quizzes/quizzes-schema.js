const mongoose = require('mongoose');

const quizzesSchema = mongoose.Schema({
    _id: String,
    title: String,
    questions: [{type: String, ref: 'QuestionModel'}]
}, {collection: "quizzes"});

module.exports = quizzesSchema;