const quizAttemptsModel = require('../models/quiz-attempts/quiz-attempts-model');

const scoreQuiz = (questions) => {
    let numberOfCorrectQuestions = 0;
    questions.forEach(question => question.answer === question.correct ? numberOfCorrectQuestions++ : numberOfCorrectQuestions);
    return numberOfCorrectQuestions / questions.length * 100;
}

const findAttemptsForQuiz = (quizId) => {
    return quizAttemptsModel.find({quiz: quizId}).populate("quiz", "title_id")
}

const createAttemptForQuiz = (quizId, attempt) => {
    return quizAttemptsModel.create({quiz: quizId, answers: attempt, score: scoreQuiz(attempt)})
}

module.exports = {
    findAttemptsForQuiz,
    createAttemptForQuiz,
}