const session = require('express-session')
const dbHelper = require('./dbHelper')

class AdminController { 

    // GET/admin
    index(req, res){
        res.render('admin/admin.hbs', {
            layout: 'adminLayout.hbs'
        });
          
    }

    // GET /admin/type
    typeProduct(req, res){
        res.render('admin/typeProductManager' ,
            {
                layout: 'adminLayout.hbs'
            }
        )
    }

    // GET /admin/product
    productManager(req , res) {
        res.render('admin/productManager', {
            layout: 'adminLayout.hbs'
        })
    }

    // GET /admin/staff
    staffAccount(req, res){
        var query = 'user'

        dbHelper.getRecord(query)
            .then((result) => {

                res.render('admin/staffAccount',{
                    layout: 'adminLayout.hbs',
                    users: result
                } )
            })
        
    }

    // GET /admin/orders
    getOrders(req , res) {
        res.render('admin/orders', {
            layout: 'adminLayout.hbs'
        })
    }

}
module.exports = new AdminController;