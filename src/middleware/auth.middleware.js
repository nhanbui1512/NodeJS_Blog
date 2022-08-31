const mysql = require('mysql');
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

function findUser (userid) {
    getRecord('user')
        .then(function(rows){
            for (let i = 0; i < rows.length; i++) {
                if(rows[i].userid == userid ){
                    return true;
                }
            }
            return false;
        })
}

module.exports.requireAuth = function(req, res, next){
    
    // console.log(req.cookies.userid.value());
    next();

}