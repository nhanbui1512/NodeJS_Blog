const express = require('express');
const router = express.Router();
const productController = require('../app/controllers/productController');


router.use('/:id',productController.getProduct);

module.exports = router;