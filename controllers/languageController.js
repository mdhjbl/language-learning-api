const languageModel = require("../models/languageModel")
const mongoose = require("mongoose")
const languageValidator = require("../validations/languageValidation")


exports.createlanguage = async (req, res) => {
    const validationResult = languageValidator(req.body);

    if (validationResult !== true) {
        return res.status(400).json({
            message: "Validation failed",
            errors: validationResult
        });
    }

    try {
        const { title, difficulty, stars, category, description } = req.body;
        const newLanguage = new languageModel({
            title,
            difficulty,
            stars,
            category,
            description
        });

        const savedLanguage = await newLanguage.save();

        return res.status(201).json({
            message: "Language created successfully",
            data: savedLanguage
        });

    } catch (error) {
        if (error.code === 11000) {
            const duplicateField = Object.keys(error.keyValue)[0];
            return res.status(409).json({
                message: `The ${duplicateField} already exists`
            });
        }

        return res.status(500).json({
            message: "Something went wrong",
            error: error.message
        });
    }
};


exports.getAlllanguages = async(req, res) => {
  try{
    const languages = await languageModel.find()
    res.json(languages)
  }catch(err){
    res.status(500).json({
        message: "Something went wrong",
        error: error.message
    })
  }
};

exports.getlanguageById = (req, res) => {
  res.send("Get language by ID not implemented yet");
};

exports.updatelanguageById = (req, res) => {
  res.send("Update language by ID not implemented yet");
};

exports.deletelanguageById = (req, res) => {
  res.send("Delete language by ID not implemented yet");
};
