const quizAttemptsDao = require('../../daos/quiz-attempts-dao');

const createAttemptForQuiz = (quizId, questions) => {
    return quizAttemptsDao.createAttemptForQuiz(quizId, questions);
}

const findAttemptsForQuiz = (quizId) => {
    return quizAttemptsDao.findAttemptsForQuiz(quizId);
}

module.exports = {
    createAttemptForQuiz,
    findAttemptsForQuiz,
}