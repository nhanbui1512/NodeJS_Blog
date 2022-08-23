const newsRouter = require('./news');
const adminRouter = require('./admin');

function route(app){


    app.use('/news',newsRouter);

    app.use('/admin', adminRouter);

    app.get('/', (req, res) => {

        res.render('home')
      })
      
    app.post('/', (req, res) => {
    
    console.log(req.body.input)
    res.send('')
    
    })
    
    app.get('/tintuc', (req, res) => {
    
    res.render('news')
    
    })
}
module.exports = route;