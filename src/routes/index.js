const express = require('express');

const router = express.Router();

const schoolControllers = require('../controllers/school');

router.get('/lessons', schoolControllers.getLessons);
router.get('/lessons/:lessonId', schoolControllers.getLesson);

router.post('/lessons', schoolControllers.postCreateLesson);
router.put('/lessons/:lessonId', schoolControllers.postEditLesson);
router.delete('/lessons/:lessonId', schoolControllers.postDeleteLesson);

module.exports = router;
