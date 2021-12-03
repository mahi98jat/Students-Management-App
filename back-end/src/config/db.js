const mongoose = require("mongoose");

const uri =
  "mongodb+srv://mahipal:mahi123@cluster0.5zugh.mongodb.net/Students-Data?retryWrites=true&w=majority";

async function connect() {
  
  try {
    return await mongoose.connect(uri);
  } catch (err) {
    return err.message;
  }
}

module.exports = connect;
// const { MongoClient } = require('mongodb');
// const uri = "mongodb+srv://mahipal:<password>@cluster0.5zugh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
