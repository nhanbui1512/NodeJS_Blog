const express = require('express');
const router = express.Router();
const collectionController = require('../app/controllers/CollectionController');


router.get('/:slug',collectionController.index);
// router.get('/:slug',collectionController.listCourse);


module.exports = router;