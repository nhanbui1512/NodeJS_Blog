class CollectionController { 

    //GET /news
    index(req, res){
        res.render('collection')
    }
    

}
module.exports = new CollectionController;