const logger = require('../helpers/logger/winston');

const Lesson = require('../models/lesson');

exports.getLessons = (req, res, next) => {
  Lesson.find()
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      res.status(500);
      logger.log('error', `Error with getLessons request ${err}`);
    });
};

exports.getLesson = (req, res, next) => {
  const lessonId = req.params.lessonId;
  Lesson.findById(lessonId)
    .then(lesson => {
      if (lesson !== null) res.send(lesson);
      else {
        res.status(403);
        res.send(`Not found Lesson with id ${lessonId}`);
      }
    })
    .catch(err => {
      res.status(500);
      logger.log('error', `Error with getLesson request ${err}`);
    });
};

exports.postCreateLesson = (req, res, next) => {
  const lesson = new Lesson({
    topic: req.body.topic,
    teacherId: req.body.teacherId,
    groupId: req.body.groupId,
    room: req.body.room,
    startAt: req.body.startAt,
  });
  lesson
    .save()
    .then(() => {
      res.status(200);
    })
    .catch(err => {
      res.status(403);
      logger.log('error', `Error with postCreateLesson request ${err}`);
    });
};

exports.postEditLesson = (req, res, next) => {
  const lessonId = req.params.lessonId;
  Lesson.findById(lessonId)
    .then(lesson => {
      (lesson.topic = req.body.topic),
        (lesson.teacherId = req.body.teacherId),
        (lesson.groupId = req.body.groupId),
        (lesson.room = req.body.room),
        (lesson.startAt = req.body.startAt);
      return lesson.save();
    })
    .then(() => {
      res.status(200);
    })
    .catch(err => {
      res.status(400);
      logger.log('error', `Error with postEditLesson request ${err}`);
    });
};

exports.postDeleteLesson = (req, res, next) => {
  const lessonId = req.params.lessonId;
  Lesson.findByIdAndDelete(lessonId)
    .then(() => {
      res.status(200);
    })
    .catch(err => {
      res.status(403);
      logger.log('error', `Error with postDeleteLesson request ${err}`);
    });
};
