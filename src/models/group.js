const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const groupSchema = new Schema({
  name: { type: String, required: true },
  students: [
    {
      studentId: {
        type: Schema.Types.ObjectId,
        ref: "Student",
        required: true,
      },
    },
  ],
});

module.exports = mongoose.model("Group", groupSchema);
