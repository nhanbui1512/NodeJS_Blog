class AdminController { 

    //GET /news
    index(req, res){
        res.render('admin');
    }
    login(req,res){
        res.render('adminLogin');
    }
    

}
module.exports = new AdminController;