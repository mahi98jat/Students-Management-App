const mongoose = require("mongoose");
const { nanoid } = require("nanoid");
const loginSchema = new mongoose.Schema(
  {
    role: {
      required: true,
      type: String,
    },
    _id: {
      type: String,
      default: () => nanoid(),
    },
    email: {
      required: true,
      type: String,
    },
    password: {
      required: true,
      type: String,
    },
  },
  {
    versionKey: false,
    timeStamps: true,
  }
);
const Login = mongoose.model("login", loginSchema);
module.exports = Login;
