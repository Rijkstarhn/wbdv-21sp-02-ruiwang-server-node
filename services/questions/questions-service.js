// const questions = require('./questions.json')
// const questionsModel = require('../../models/questions/questions-model');

const questionsDao = require('../../daos/questions-dao')

const findAllQuestions = () => {
    // return questions
    // return questionsModel.find();
    return questionsDao.findAllQuestions();
}

const findQuestionById = (questionId) => {
    // return questionsModel.findById()
    // return questions.find((question) => question._id === questionId)
    return questionsDao.findQuestionsById(questionId);
}

const findQuestionsForQuiz = (quizId) => {
    // return questionsModel.find({quizId: quizId});
    // return questions.filter(question => question.quizId === quizId)
    return questionsDao.findQuestionsForQuiz(quizId);
}

module.exports = {
    findAllQuestions,
    findQuestionById,
    findQuestionsForQuiz,
}