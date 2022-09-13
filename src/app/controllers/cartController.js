var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodejs_courses'
  });

con.connect();

class CartController { 

    //GET /news
    index(req, res){
        res.render('cart');
          
    }

    order(req, res , next){
        var stringQuery = `INSERT INTO orders (HoVaTen, Email , SoDienThoai , DiaChiGiaoHang ) VALUES ( '${req.body.name}' , '${req.body.email}' , '${req.body.phonenumber}' , '${req.body.address}' ) `;
        con.query(stringQuery, function(err, result, fields) {
            if(err) {
                throw err;
            }
            res.send('Insert Successed');
        })
       
    }

}
module.exports = new CartController;