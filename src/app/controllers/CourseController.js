const mysql = require('mysql');
class CourseController { 

    //GET /news
    create(req, res){
        res.render('course_create');
    }

    listCourse(req,res){

        res.send('')    
    }


    addCourse(req, res , next){

        res.send(req.body)

        const con = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'nodejs_courses'
          });

          con.connect(function(err){
            if (err) 
                return console.error('error: ' + err.message);
            // console.log('Connected to the MySQL server.');

            var stringquery = "INSERT INTO Courses (Name,Price,DateCreate) VALUES ('"+req.body.name+"','"+ req.body.price+"','"+ Date.now() +"') ";
            con.query(stringquery , function(err, result, fields){
                if(err) {
                    console.log('Errro' + err);
                }
                else{
                    console.log('Insert successed!!');
                }
            })
        })
    }
    

}
module.exports = new CourseController;