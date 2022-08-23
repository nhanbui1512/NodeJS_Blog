var mysql = require('mysql');

class AdminController { 

    //GET /news
    index(req, res){

        var con = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'dbjava'
          });

        con.connect(function(err){
            // if (err) {
            //     return console.error('error: ' + err.message);
            //   }
            
            //   console.log('Connected to the MySQL server.');

            if(err) throw err;
            con.query('SELECT * FROM table1' , function(err, result, fields){
                if(err) throw err;
                console.log(result);
            })
        })



        res.render('admin');

        
          
    }
    login(req,res){
        res.render('adminLogin');
    }
    

}
module.exports = new AdminController;