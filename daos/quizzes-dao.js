const quizzesModel = require('../models/quizzes/quizzes-model');

const findAllQuizzes = () => {
    return quizzesModel.find()
}

const findQuizById = (quizId) => {
    return quizzesModel.findQuizById(quizId);
}

module.exports = {
    findAllQuizzes,
    findQuizById,
}