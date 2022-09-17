const session = require('express-session')

class AdminController { 

    index(req, res){
        res.render('admin', {
            layout: 'adminLayout.hbs'
        });
          
    }
    product(req, res){
        res.render('productManager' ,
            {
                layout: 'adminLayout.hbs'
            }
        )
    }

   

}
module.exports = new AdminController;