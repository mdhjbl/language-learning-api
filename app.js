const express = require("express")
const mongoose = require("mongoose")
require("./config/db")
const app = express()
app.use(express.json());



app.listen(3000, () => {
  console.log("server is running on port 3000 :)");
});

