const { json } = require('express');
const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodejs_courses'
});
con.connect();

class CollectionController { 

    // /collection/:slug
    index(req, res){

        var data = [];
        var slug = req.params.slug

        fetch(`http://localhost:3001/sanpham/${slug}`)
            .then( (response) => {
                if(response.ok){
                    return response.json()
                }
                return new Error
            })  

            .then( rows => {
                data = rows
            })

            .then( () => {
                res.render('collection', {data: data , nameCollection: data[0].TenLoaiHang})

            })

            .catch((err) => {
                res.send('GET API is unsuccessful')
            } )




    }

    viewCreate(req,res){
        res.render('CreateProduct');
        // res.send('trang tao san pham');

    }

    

    addProduct(req,res){

        var proDuct = {
            name: req.body.name,
            price: req.body.price,
            url: req.body.urlimg,
            idLoaiHang: req.body.idsanpham,
            khuyenMai: req.body.sale,
        }

        var stringquery = `INSERT INTO sanpham (IDLoaiHang, TenSanPham, GiaSanPham , KhuyenMai, UrlAnh ) VALUES ('${proDuct.idLoaiHang}','${proDuct.name}','${proDuct.price}','0','${proDuct.url}')`;

        con.query(stringquery , function(err, result, fields){
            if(err) {
                console.log('Errro' + err);
            }
            else{
                // console.log('Insert successed!!');
            }
        })

        res.send('insert sucsessed ');
          
    }

}

module.exports = new CollectionController;





   


