const quizAttemptsModel = require('../models/quiz-attempts/quiz-attempts-model');

const scoreQuiz = (questions, attempts) => {
    let numberOfCorrectQuestions = 0;
    for (let i = 0; i < questions.length; i++) {
        attempts[i] === questions[i].correct ? numberOfCorrectQuestions++ : numberOfCorrectQuestions
    }
    // console.log("attempts dao111:", numberOfCorrectQuestions);
    return Math.floor(numberOfCorrectQuestions / questions.length * 100);
}

const findAttemptsForQuiz = (quizId) => {
    return quizAttemptsModel.find({quiz: quizId}).populate("quiz", "title_id").exec();
}

const createAttemptForQuiz = (quizId, attempts, questions) => {
    let docs = {quiz: quizId, answers: attempts, score: scoreQuiz(questions, attempts)};
    return quizAttemptsModel.create(docs);
}

module.exports = {
    findAttemptsForQuiz,
    createAttemptForQuiz,
}