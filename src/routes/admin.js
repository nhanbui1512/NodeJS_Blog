const express = require('express');
const router = express.Router();
const authMidleware = require('../middleware/auth.middleware');
const adminController = require('../app/controllers/adminController');

router.get('/type',adminController.typeProduct);
router.get('/product', adminController.productManager)
router.get('/staff',adminController.staffAccount)
router.get('/orders', adminController.getOrders)
router.get('/',adminController.index);


module.exports = router;