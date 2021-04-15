const quizzes = require('./quizzes.json')
const quizzesModel = require('../../models/quizzes/quizzes-model');

const findAllQuizzes = () => {
    // return quizzes
    return quizzesModel.find();
}
const findQuizById = (quizId) => {
    return quizzesModel.findById(quizId);
    // return quizzes.find((quiz) => {
    //     return quiz._id === quizId
    // })
}

// TODO: MongoDB Assignment next week
const createQuiz = () => {}
const updateQuiz = () => {}
const deleteQuiz = () => {}

module.exports = {
    createQuiz,
    findQuizById,
    findAllQuizzes,
    updateQuiz,
    deleteQuiz,
}