const questions = require('./questions.json')

const questionsModel = require('../../models/questions/questions-model');

const findAllQuestions = () => {
    // return questions
    return questionsModel.find();
}

const findQuestionById = (questionId) => {
    // return questionsModel.findById()
    // return questions.find((question) => question._id === questionId)
}

const findQuestionsForQuiz = (quizId) => {
    return questionsModel.find({quizId: quizId});
    // return questions.filter(question => question.quizId === quizId)
}

module.exports = {
    findAllQuestions,
    findQuestionById,
    findQuestionsForQuiz,
}