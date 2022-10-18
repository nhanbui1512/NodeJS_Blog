var mysql = require('mysql');
const session = require('express-session')
const { getUser } = require('./dbHelper');
const dbHelper = require('./dbHelper');
const requestIp = require('request-ip');
const { json } = require('express');


 
class homeController { 


    emitComment () {
        setInterval(() => {
            window.dispatchEvent(
                new CustomEvent('testEvent' ,{
                    detail: 'Noi dung test'
                })
            )
        }, 1000);
    }
    
    //GET /news
    index(req, res){
        
        var listbalo =  [];
        var listjacket = [];
        var listtee = [];


        fetch('http://localhost:3001/sanpham')
            .then((resonse) =>{
                if(resonse.ok){
                    return resonse.json()
                }

                throw new Error('Error Something')
            })
            .then(rows => {

                for (let i = rows.length - 1 ; i >= 0 ; i--) {
                    if(rows[i].IDLoaiHang == '1' && listbalo.length < 10 ){
                        listbalo.push({IDSanPham: rows[i].IDSanPham , TenSanPham: rows[i].TenSanPham , GiaSanPham: rows[i].GiaSanPham, urlAnh: rows[i].UrlAnh })
                    }
                    if(rows[i].IDLoaiHang == '2' && listjacket.length < 10){
                        listjacket.push({IDSanPham: rows[i].IDSanPham , TenSanPham: rows[i].TenSanPham , GiaSanPham: rows[i].GiaSanPham, urlAnh: rows[i].UrlAnh })
                    }
                    if(rows[i].IDLoaiHang == '3' && listtee.length < 10){
                        listtee.push({IDSanPham: rows[i].IDSanPham , TenSanPham: rows[i].TenSanPham , GiaSanPham: rows[i].GiaSanPham, urlAnh: rows[i].UrlAnh })
                    }
                }
            })

            .then( () => {
                res.render('home', {listbalo: listbalo , listjacket: listjacket, listtee: listtee});
            })
            .catch(err => {
                res.send('GET API is unsuccessful')
            });
            
    

        // res.cookie('username', {name: 'nhanbui' , id : 3} , {

        // })
        
        }

}
module.exports = new homeController;
