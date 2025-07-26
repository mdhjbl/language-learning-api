//db.js for connecting ro database 
const mongoose = require("mongoose")
const dotenv = require("dotenv");
dotenv.config();
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection failed:", err));