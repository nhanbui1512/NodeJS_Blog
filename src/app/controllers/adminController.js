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

        fetch('http://localhost:3001/account')
            .then(res => {
                if(res.ok ){
                    return res.json()
                }
                throw new Error
            })
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


    // GET /admin/edit/ID

    editInfo(req, res){
        var ID = req.params.ID
        console.log(ID)
        res.render('admin/editinfo', {
            layout: 'adminLayout.hbs'
        })
    }
    

}
module.exports = new AdminController;