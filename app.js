const express = require("express")
const mongoose = require("mongoose")
require("./config/db")
const app = express()
app.use(express.json());

app.use("/api/users" , require("./routes/userRoutes") )
app.use("/api/languages" , require("./routes/languageRoutes"))

app.listen(3000, () => {
  console.log("server is running on port 3000 :)");
});

