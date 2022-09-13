// var mysql = require('mysql');

// var con = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'nodejs_courses'
//   });

// con.connect();

class AdminController { 

    index(req, res){
        res.render('admin/admin.hbs', {
            layout: 'admin.layout.hbs'
        });
          
    }

    product(req, res){
        res.render('admin/product.hbs' , 
           {
            layout: false
           }
        )
    }

}
module.exports = new AdminController;