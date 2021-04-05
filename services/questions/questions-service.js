const questions = require('./questions.json')

const findAllQuestions = () => {
    return questions
}

const findQuestionById = (questionId) => {
    return questions.find((question) => question._id === questionId)
}

const findQuestionsForQuiz = (quizId) => {
    return questions.filter(question => question.quizId === quizId)
}

module.exports = {
    findAllQuestions,
    findQuestionById,
    findQuestionsForQuiz,
}