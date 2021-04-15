module.exports = app => {

    const questionService = require('../services/questions/questions-service');

    const findAllQuestions = (req, res) => {
        questionService.findAllQuestions()
            .then(questions => res.send(questions))
        // const questions = questionService.findAllQuestions();
        // res.send(questions)
    }

    const findQuestionById = (req, res) => {
        res.send(questionService.findQuestionById(req.params.quizId));
    }

    const findQuestionsForQuiz = (req, res) => {
        questionService.findQuestionsForQuiz(req.params.quizId)
            .then(questions => res.send(questions))
        // console.log('findQuestionsForQuiz called!', req.params.quizId)
        // const quizId = req.params.quizId;
        // res.send(questionService.findQuestionsForQuiz(quizId))
    }

    app.get('/api/questions', findAllQuestions);
    app.get('/api/quizzes/:quizId', findQuestionById);
    app.get('/api/quizzes/:quizId/questions', findQuestionsForQuiz);
}
