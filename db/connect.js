const mongoose = require("mongoose");

require("dotenv").config();

const db_url = process.env.DATABASE_URL;

mongoose.connect(
  db_url,
  {
    useNewUrlParser: true,
  },
  (error) => {
    if (!error) {
      console.log("Database Connected Successfully");
    } else {
      console.log("Error : " + error);
    }
  }
);

module.exports = mongoose;
