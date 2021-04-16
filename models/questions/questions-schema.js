const mongoose = require('mongoose');

const questionSchema = mongoose.Schema({
    _id: {type: String},
    title: {type: String},
    quizId: {type: String},
    question: {type: String},
    correct: {type: String},
    // answer: {type: String},
    type: {type: String, enum: ["TRUE_FALSE", "MULTIPLE_CHOICE"]},
    choices: {type: [String]},
}, {collection: "questions"});

module.exports = questionSchema;