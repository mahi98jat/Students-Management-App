const mongoose = require("mongoose");
const { nanoid } = require("nanoid");
const StudentSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      default: () => nanoid(),
    },

    name: { required: true, type: String },
    age: { required: true, type: Number },
    education: {
      required: true,
      type: String,
    },
    contact: { required: true, type: String },
    gender: { required: true, type: String },
    city: { required: true, type: String },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Student = mongoose.model("student", StudentSchema);
module.exports = Student;
