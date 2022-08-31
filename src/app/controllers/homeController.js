var mysql = require('mysql');
const { getUser } = require('./dbHelper');
const dbHelper = require('./dbHelper');
class homeController { 

    //GET /news
    index(req, res){
        var listbalo =  [];
        var listjacket = [];
        var result = dbHelper.getRecord('sanpham')
            .then(function(rows){
                for (let i = 0; i < rows.length; i++) {
                    if(rows[i].IDLoaiHang == '1' && listbalo.length < 10 ){
                        listbalo.push({IDSanPham: rows[i].IDSanPham , TenSanPham: rows[i].TenSanPham , GiaSanPham: rows[i].GiaSanPham, urlAnh: rows[i].UrlAnh })
                    }
                    if(rows[i].IDLoaiHang == '2' && listjacket.length < 10){
                        listjacket.push({IDSanPham: rows[i].IDSanPham , TenSanPham: rows[i].TenSanPham , GiaSanPham: rows[i].GiaSanPham, urlAnh: rows[i].UrlAnh })
                    }
                }

                res.render('home', {listbalo: listbalo , listjacket: listjacket});
        });

        // res.render('home');
          
    }

}
module.exports = new homeController;