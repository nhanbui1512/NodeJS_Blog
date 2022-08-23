const express = require('express');
const router = express.Router();
const newsController = require('../app/controllers/Newscontroller');

router.use('/',newsController.index);


module.exports = router;