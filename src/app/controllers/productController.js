const dbHelper = require('./dbHelper');


class ProductController { 


    getProduct(req, res){
        var id = req.params.id;
        dbHelper.getRecord('sanpham')
            .then( function(rows){
                for (let i = 0; i < rows.length; i++) {
                    if(rows[i].IDSanPham == id){
                        res.render('product', {sanpham : rows[i]});
                        return;
                    }
                    
                }
            })
    }
    

}
module.exports = new ProductController;