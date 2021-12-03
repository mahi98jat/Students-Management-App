const express = require("express");
const Student = require("../models/students.model");
const router = express.Router();

router.get("", async (req, res) => {
  // check who is requesting for students data(Is he an admin or not);
  let data = await Student.find().lean().exec();
  console.log(data);
  res.status(200).send(data);
  
});
router.post("", async (req, res) => {
  // here we will check for credentials;
  console.log(req.body);
  await Student.create(req.body);
  res.status(200).send("Data successfully got posted");
});
router.delete("/delete/:id", async (req, res) => {
  console.log(req.body);
  await Student.deleteOne(req.param.id);
  res.status(200).send("data deleted successfully");
});

module.exports = router;
