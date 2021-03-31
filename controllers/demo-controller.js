module.exports = (app) => {
    app.get('/', function (req, res) {
        res.send('Hello World')
    })

    const add = (req, res) => {
        const a = parseInt(req.params['paramA'])
        const b = parseInt(req.params.paramB)
        res.send(`${a + b}`);
    }

    const subtract = (req, res) => {
        const a = req.query.x;
        const b = req.query.y;
        res.send(a - b + '');
    }

    app.get('/add/:paramA/:paramB', add)

    app.get('/subtract', subtract)
}

