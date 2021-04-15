// const quizzes = require('./quizzes.json')
// const quizzesModel = require('../../models/quizzes/quizzes-model');

const quizzesDao = require('../../daos/quizzes-dao');

const findAllQuizzes = () => {
    return quizzesDao.findAllQuizzes();
    // return quizzes
    // return quizzesModel.find();
}
const findQuizById = (quizId) => {
    return quizzesDao.findQuizById(quizId);
    // return quizzesModel.findById(quizId);
    // return quizzes.find((quiz) => {
    //     return quiz._id === quizId
    // })
}

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