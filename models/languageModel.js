const mongoose = require("mongoose");

const languageSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true, 
    trim: true
  },
  difficulty: {
    type: String,
    enum: ['easy', 'medium', 'hard'],
    default: 'medium'
  },
  stars: {
    type: Number,
    min: 0,
    max: 5,
    default: 3
  },
  category: {
    type: String,
    enum: ['frontend', 'backend', 'fullstack', 'other'],
    default: 'other'
  },
  description: {
    type: String,
    maxlength: 500
  }
}, {
  timestamps: true 
});

module.exports = mongoose.model("Language", languageSchema);
