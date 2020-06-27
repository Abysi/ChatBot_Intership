const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const teacherSchema = new Schema({
  surname: { type: String, required: true },
});

module.exports = mongoose.model('Teacher', teacherSchema);
