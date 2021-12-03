const express = require("express");
const router = express.Router();

const Contest = require("../models/contest.model");

router.get("", async (req, res) => {
  let data = await Contest.find().lean().exec();
  res.status(200).send(data);
});
router.post("", async (req, res) => {
  //console.log(req.body);
  //res.send("contest added successfully")
  //check for credentials if this operation is done by admin or not.
  await Contest.create(req.body);
  res.status(201).send("Contest Added successfully");
});
router.delete("/delete/:id", async (req, res) => {
  //let id = req.params.id;
  //console.log(id);
  await Contest.deleteOne(req.param.id);
  res.status(202).send("contest deleted successfully");

  
});
module.exports = router;
