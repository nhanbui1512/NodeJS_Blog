var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodejs_courses'
  });

con.connect();

class AdminController { 

    //GET /news
    index(req, res){
        res.render('admin', {
            layout: false
        });
          
    }
    login(req,res){
        res.render('adminLogin');
    }
    

}
module.exports = new AdminController;