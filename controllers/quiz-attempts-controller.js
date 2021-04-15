const quizAttemptDao = require('../daos/quiz-attempts-dao');

module.exports = app => {

    const createAttempt = (req, res) => {
        quizAttemptDao.createAttemptForQuiz(req.params.quizId, req.body)
            .then(attempt => res.send(attempt))
    }

    const findAttemptsForQuiz = (req, res) => {
        quizAttemptDao.findAttemptsForQuiz(req.params.quizId)
            .then(attempts => res.send(attempts))
    }

    app.post('/api/quizzes/:quizId/attempts', createAttempt);
    app.get('/api/quizzes/:quizId/attempts', findAttemptsForQuiz);
}