const express = require('express');
const router = express.Router();
const authMidleware = require('../middleware/auth.middleware');
const adminController = require('../app/controllers/adminController');

router.use('/product',adminController.product);
router.use('/',adminController.index);


module.exports = router;