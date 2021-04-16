const quizAttemptsModel = require('../models/quiz-attempts/quiz-attempts-model');

const scoreQuiz = (questions) => {
    let numberOfCorrectQuestions = 0;
    questions.forEach(question => question.answer === question.correct ? numberOfCorrectQuestions++ : numberOfCorrectQuestions);
    return numberOfCorrectQuestions / questions.length * 100;
}

const findAttemptsForQuiz = (quizId) => {
    return quizAttemptsModel.find({quiz: quizId}).populate("quiz", "title_id").exec();
}

const createAttemptForQuiz = (quizId, questions) => {
    return quizAttemptsModel.create({quiz: quizId, answers: questions, score: scoreQuiz(questions)});
}

module.exports = {
    findAttemptsForQuiz,
    createAttemptForQuiz,
}