const mongoose = require("mongoose");

const languageSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true, 
    trim: true
  },
  difficulty: {
    type: Number,
    enum: [1, 2, 3, 4, 5] 
  },
   category: {
    type: String,
    max : 500
  },
  stars: {
    type: Number,
    min: 0,
    max: 5,
    default: 3
  },
  description: {
    type: String,
    maxlength: 500
  }
}, {
  timestamps: true 
});

module.exports = mongoose.model("Language", languageSchema);
