const express = require("express");
const Login = require("../models/login.model.js");
const router = express.Router();
router.post("/add", async (req, res) => {
  //console.log(req.body);
  await Login.create(req.body);
  res.status(200).send("user added successfully");
});

router.post("", async (req, res) => {
  try {
    let { role, email, password } = req.body;
    //console.log(role, email, password);
    // check for email
    let Email = email.split("@");
    // console.log(Email);
    if (Email[1] !== "masai.school") {
      return res
        .status(400)
        .send("please fill correct email and password");
    }
    // finding the user/admin in database is it present there or not.

    let k = await Login.find().lean().exec();

    //console.log(k);
    let data = k.filter((e) => e.email === email);
    // console.log(data);
    if (data.length === 0) {
      return res.status(404).send("data not matched");
    }
    // console.log("just sending the data", data[0].email, data[0].password);
    // if details match with database then send token
    if (data[0].email == email && data[0].password == password) {
      //console.log(role, data[0]._id);
      return res.status(202).json({
        token: `${role + "$$$" + data[0]._id}`,
      });
    }
  } catch (err) {
    return res.status(503).send(err.message);
  }
});

module.exports = router;
