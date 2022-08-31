// const { query } = require('express');
const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodejs_courses'
});
con.connect();

var list;

function getRecord(name)
{
    return new Promise(function(resolve, reject) {

        query_str = `SELECT * FROM ${name}`;

        con.query(query_str, function (err, rows, fields) {
            if (err) throw err;
            resolve(rows);
        });
    });
}




class loginController { 

    //GET /news
    index(req, res){
        res.render('login' , {layout : false});
    }

    checkLogin(req, res){
        var email = req.body.email;
        var password = req.body.password;

        getRecord('user')
            .then( function(rows){
                for (let i = 0; i < rows.length; i++) {
                    if(email == rows[i].email && password == rows[i].password){
                        res.cookie('userid', rows[i].userid);
                        return res.redirect('/')
                    }
                    return res.redirect('/login')
                }
            })
        
    }

}
module.exports = new loginController;