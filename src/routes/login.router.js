const express = require('express');
const router = express.Router();
const loginController = require('../app/controllers/login.controller');


router.post('/checkLogin',loginController.checkLogin);
router.use('/logout', loginController.logOut);
router.get('/', loginController.index);

module.exports = router;