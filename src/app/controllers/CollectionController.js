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

    //GET /news
    index(req, res){

        var data;
        var query = `SELECT sanpham.IDSanPham, sanpham.TenSanPham, sanpham.GiaSanPham, sanpham.UrlAnh, loaihang.TenLoaiHang FROM sanpham, loaihang WHERE loaihang.SlugLoaiHang = '${req.params.slug}' `
        

        con.query(query , function(err, result, fields){
            if(err) {
                console.log('Errro' + err);
            }
            else{
                data = result;
                res.render('collection', {data: data , nameCollection: data[0].TenLoaiHang})
            }

        });


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

        con.connect(function(err){
            if (err) 
                return console.error('error: ' + err.message);

            con.query(stringquery , function(err, result, fields){
                if(err) {
                    console.log('Errro' + err);
                }
                else{
                    console.log('Insert successed!!');
                }
            })

        });

        res.redirect('/collection/balo')
          
    }

}

module.exports = new CollectionController;





   


