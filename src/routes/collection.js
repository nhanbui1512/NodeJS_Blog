const express = require('express');
const router = express.Router();
const collectionController = require('../app/controllers/CollectionController');

router.get('/create',collectionController.viewCreate);
router.post('/addProduct',collectionController.addProduct);
router.get('/:slug',collectionController.index);

module.exports = router;