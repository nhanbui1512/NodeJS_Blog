const express = require('express');
const router = express.Router();
const courseController = require('../app/controllers/CourseController');

router.use('/Create',courseController.create);
router.get('/',courseController.listCourse);
router.post('/addCourse',courseController.addCourse);

module.exports = router;