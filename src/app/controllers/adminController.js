var mysql = require('mysql');

class AdminController { 

    //GET /news
    index(req, res){

        var con = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'nodejs_courses'
          });

        con.connect(function(err){
            if (err) {
                return console.error('error: ' + err.message);
              }
            
              console.log('Connected to the MySQL server.');
              
        })



        res.render('admin');

        
          
    }
    login(req,res){
        res.render('adminLogin');
    }
    

}
module.exports = new AdminController;