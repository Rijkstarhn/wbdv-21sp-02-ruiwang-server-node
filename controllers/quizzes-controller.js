module.exports = app => {

    const quizzesService = require('../services/quizzes/quizzes-service')

    const findAllQuizzes = (req, res) => {
        const quizzes = quizzesService.findAllQuizzes();
        res.send(quizzes)
    }
    const findQuizById = (req, res) => {
        const quiz = quizzesService.findQuizById(req.params.quizId);
        res.send(quiz)
    }

    app.get('/api/quizzes', findAllQuizzes)
    app.get('/api/quizzes/:quizId', findQuizById)
}