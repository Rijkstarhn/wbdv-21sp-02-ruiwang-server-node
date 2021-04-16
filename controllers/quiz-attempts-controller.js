const quizAttemptDao = require('../daos/quiz-attempts-dao');
const quizAttemptsService = require('../services/quiz-attempts/quiz-attempts-service');

module.exports = app => {

    const createAttempt = (req, res) => {
        // console.log('req.body', req.body);
        // console.log('req.params.quizId', req.params.quizId);
        quizAttemptsService.createAttemptForQuiz(req.params.quizId, req.body)
            .then(attempt => res.send(attempt))
    }

    const findAttemptsForQuiz = (req, res) => {
        quizAttemptsService.findAttemptsForQuiz(req.params.quizId)
            .then(attempts => res.send(attempts))
    }

    app.post('/api/quizzes/:quizId/attempts', createAttempt);
    app.get('/api/quizzes/:quizId/attempts', findAttemptsForQuiz);
}