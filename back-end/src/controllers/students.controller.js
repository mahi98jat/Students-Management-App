const express = require("express");
const Student = require("../models/students.model");
const router = express.Router();

router.get("", async (req, res) => {
  // check who is requesting for students data(Is he an admin or not);
  try {
    let data = await Student.find().lean().exec();
    console.log(data);
    res.status(200).send(data);
  } catch (err) {
    console.log(err.message);
    return res.status(401).send(err.message);
  }
});
router.post("", async (req, res) => {
  // here we will check for credentials;

  try {
    console.log(req.body);
    await Student.create(req.body);
    res.status(200).send("Data successfully got posted");
  } catch (err) {
    return res.status(401).send(err.message);
  }
});
router.delete("/delete/:id", async (req, res) => {
  try {
    console.log(req.body);
    await Student.deleteOne(req.param.id);
    res.status(200).send("data deleted successfully");
  } catch (err) {
    return res.status(401).send(err.message);
  }
});

module.exports = router;
