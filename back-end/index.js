const express = require("express");
const port = process.env.PORT || 6677;
const cors = require("cors");
require("dotenv").config();
const app = express();
const connect = require("./src/config/db.js"); // import connection module for connectivity;
app.use(cors());
// importing students and contests controller here
const students = require("./src/controllers/students.controller.js");
const contests = require("./src/controllers/contest.controller.js");
// importing login controllers here
const login = require("./src/controllers/login.controller.js");

app.use(express.json()); // it will enable us to work with json data format.

// redirecting routes to students and contest controllers
app.use("/students", students);
app.use("/contest", contests);
app.use("/login", login);

app.listen(port, (req, res) => {
  connect(); // calling the connect we are connecting with atlas online database.
  console.log(`Server is responding at port ${port}`);
});
