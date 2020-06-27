const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const lessonSchema = new Schema({
  topic: { type: String, required: true },
  teacherId: {
    type: Schema.Types.ObjectId,
    ref: 'Teacher',
    required: true,
  },
  groupId: { type: Schema.Types.ObjectId, ref: 'Group', required: true },
  room: { type: Number, required: true },
  startAt: { type: Number, required: true },
});

module.exports = mongoose.model('Lesson', lessonSchema);
