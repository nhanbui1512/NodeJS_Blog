const express = require('express');
const router = express.Router();
const cartController = require('../app/controllers/cartController');

router.get('/',cartController.index);
router.post('/order',cartController.order);
module.exports = router;