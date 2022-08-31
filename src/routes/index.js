
const adminRouter = require('./admin');
const collectionRouter = require('./collection');
const loginRouter = require('./login.router');
const authMidleware = require('../middleware/auth.middleware')
const homeRouter = require('./home.router');

function route(app){


    app.use('/admin',adminRouter);
    
    app.use('/collection', collectionRouter)

    app.use('/login', loginRouter);

    app.use('/',homeRouter);
    
}
module.exports = route;