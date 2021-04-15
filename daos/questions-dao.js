const questionsModel = require('../models/questions/questions-model')
const quizzesModel = require('../models/quizzes/quizzes-model')

const findAllQuestions = () => {
    const result = questionsModel.find();
    console.log('result', result);
    return result;
}

const findQuestionsById = (qid) => {
    return questionsModel.findById(qid);
}

const findQuestionsForQuiz = (qid) => {
    // console.log("12321", quizzesModel.findById(qid).populate('questions').exec());
    return quizzesModel.findById(qid).populate('questions').exec();
}

module.exports = {
    findAllQuestions,
    findQuestionsById,
    findQuestionsForQuiz,
}