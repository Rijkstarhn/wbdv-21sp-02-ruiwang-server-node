module.exports = app => {

    const quizzesService = require('../services/quizzes/quizzes-service')

    const findAllQuizzes = (req, res) => {
        // const quizzes = quizzesService.findAllQuizzes();
        quizzesService.findAllQuizzes()
            .then(quizzes => res.send(quizzes))

    }
    const findQuizById = (req, res) => {
        quizzesService.findQuizById(req.params.quizId)
            .then(quiz => res.send(quiz));
        // const quiz = quizzesService.findQuizById(req.params.quizId);
        // res.send(quiz)
    }

    app.get('/api/quizzes', findAllQuizzes)
    app.get('/api/quizzes/:quizId', findQuizById)
}