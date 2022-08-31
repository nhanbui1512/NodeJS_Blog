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


module.exports.getRecord = function(name){
    return new Promise(function(resolve, reject) {
        query_str = `SELECT * FROM ${name}`;

        con.query(query_str, function (err, rows, fields) {
            if (err) throw err;
            resolve(rows);
        });
    });
}

