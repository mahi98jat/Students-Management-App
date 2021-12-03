const mongoose = require("mongoose");
const { nanoid } = require("nanoid");
const contestSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    topic: {
      type: String,
      required: true,
    },
    End_date: {
      type: String,
      required: true,
    },
    _id: {
      type: String,
      default: () => nanoid(),
    },
    Start_date: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Contest = mongoose.model("contest", contestSchema);

module.exports = Contest;
