const mysql = require('mysql');
const session = require('express-session')

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodejs_courses'
});
con.connect();

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


module.exports.requireAuth = function(req, res, next){
    if(req.session.userid == undefined){
        res.redirect('/login');
        return;
    }

    if(req.session.permission != 1){
        res.redirect('/login');
        return;
    }
    
    next();

}