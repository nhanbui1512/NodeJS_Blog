const newsRouter = require('./news');
const adminRouter = require('./admin');
const courseRouter = require('./course');
const collectionRouter = require('./collection');

function route(app){


    app.use('/news',newsRouter);

    app.use('/course',courseRouter);

    app.use('/admin', adminRouter);
    
    app.use('/collection', collectionRouter)

    // app.use('/', (req, res) => {
    //   res.render('home', {layout: false})
    // })

    app.get('/', (req, res) => {

        res.render('home');
      })
      
    
}
module.exports = route;