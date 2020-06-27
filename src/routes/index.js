const express = require('express');

const router = express.Router();

const schoolControllers = require('../controllers/school');

router.get('/lessons', schoolControllers.getLessons);
router.get('/lessons/:lessonId', schoolControllers.getLesson);

router.post('/create-lesson', schoolControllers.postCreateLesson);
router.post('/edit-lesson/:lessonId', schoolControllers.postEditLesson);
router.post('/delete-lesson/:lessonId', schoolControllers.postDeleteLesson);

module.exports = router;
