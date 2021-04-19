const questionsModel = require('../models/questions/questions-model')
const quizzesModel = require('../models/quizzes/quizzes-model')

const findAllQuestions = () => {
    return questionsModel.find();
}

const findQuestionsById = (qid) => {
    return questionsModel.findById(qid);
}

const findQuestionsForQuiz = (qid) => {
    // console.log("12321", quizzesModel.findById(qid).populate('questions').exec());
    return questionsModel.find({"quizId": qid});
    // don't know why exec doesn't work
    // return quizzesModel.findById(qid).populate('questions').exec();
}

module.exports = {
    findAllQuestions,
    findQuestionsById,
    findQuestionsForQuiz,
}