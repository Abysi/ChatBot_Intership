const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const studentSchema = new Schema({
  surname: { type: String, required: true },
  groupId: {
    type: Schema.Types.ObjectId,
    ref: "Group",
    required: true,
  },
});

module.exports = mongoose.model("Student", studentSchema);
