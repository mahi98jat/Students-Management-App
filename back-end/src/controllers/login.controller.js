const express = require("express");
const Login = require("../models/login.model.js");
const router = express.Router();
router.post("/add", async (req, res) => {
  console.log(req.body);
  await Login.create(req.body);
  res.status(200).send("user added successfully");
});
router.post("", (req, res) => {
  let { role, email, password } = req.body;
  console.log(role, email, password);
  // check for email
  let Email = email.split("@");
  console.log(Email);
  if (Email[1] !== "masai.school") {
    return res
      .status(400)
      .send("please fill correct email and password");
  }
  // finding the user/admin in database is it present there or not.
  Login.findOne({ email: email })
    .lean()
    .exec()
    .then((res) => {
      console.log(res);
      if (!res) {
        return res.status(404).send("user not found");
      }
      let { data } = res;
      // if details match with database then send token
      if (data.email === email && data.password === password) {
        return res.status(202).json({
          token: `${role + data._id}`,
        });
      }
    });
});

module.exports = router;
