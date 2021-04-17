const quizAttemptsDao = require('../../daos/quiz-attempts-dao');

const createAttemptForQuiz = (quizId, attempts, questions) => {
    return quizAttemptsDao.createAttemptForQuiz(quizId, attempts, questions);
}

const findAttemptsForQuiz = (quizId) => {
    return quizAttemptsDao.findAttemptsForQuiz(quizId);
}

module.exports = {
    createAttemptForQuiz,
    findAttemptsForQuiz,
}