const express = require('express');
const router = express.Router();
const courseController = require('../app/controllers/CourseController');

router.use('/Create',courseController.create);
router.post('/addCourse',courseController.addCourse);
router.get('/:slug',courseController.listCourse);


module.exports = router;