const { response } = require('express');
const dbHelper = require('./dbHelper');


class ProductController { 


    getProduct(req, res){
        var id = req.params.id;
        fetch(`http://localhost:3000/sanpham/${id}`)
            .then(response => {
                if(response.ok){
                    return response.json()
                }
                throw new Error
            })
            .then(result => {
                res.render('product', {sanpham : result[0]});
            })
            .catch((err) =>{
                res.send(`GET API is unsuccessful`)
            })



    }
    

}
module.exports = new ProductController;