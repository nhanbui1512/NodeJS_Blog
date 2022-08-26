const newsRouter = require('./news');
const adminRouter = require('./admin');
const courseRouter = require('./course')

function route(app){


    app.use('/news',newsRouter);

    app.use('/course',courseRouter);

    app.use('/admin', adminRouter);

    app.get('/', (req, res) => {

        // res.render('home')
        res.render('home', {layout: false});
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