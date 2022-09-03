const express = require('express');
const router = express.Router();
const collectionController = require('../app/controllers/CollectionController');
const authMidleware = require('../middleware/auth.middleware');

router.get('/create',authMidleware.requireAuth,collectionController.viewCreate);
router.post('/addProduct',collectionController.addProduct);
router.get('/:slug',collectionController.index);

module.exports = router;