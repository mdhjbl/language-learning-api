const mongoose = require("mongoose")
const userModel = require("../models/userModel")
const userValidator = require("../validations/userValidation")

exports.createUser = async(req, res) => { 
    const validationResult = userValidator(req.body)

    if(validationResult !== true){
        return res.status(400).json({
            message : "Validation failed",
            errors :  validationResult
        })
    }
    
    try {
        const {name , username , age , email , password} = req.body
        const newUser = new userModel({
            name,
            username,
            age, 
            email,
            password
        })

        const savedUser = await newUser.save();

        res.status(201).json({
            message : "User added successfully",
            user: savedUser
        })

        console.log(req.body)
    }catch(error){
        if (error.code === 11000) {
            const duplicateField = Object.keys(error.keyValue)[0];
            return res.status(409).json({
                message: `The ${duplicateField} already exists`
            });
        }

        res.status(500).json({
            message: "Something went wrong",
            error: error.message
        });
    }
}


exports.getAllUsers = async(req, res) => { 
    try{
        const users = await userModel.find()
        res.json(users)
      }catch(err){
        res.status(500).json({
            message: "Something went wrong",
            error: error.message
        })
      }
}
exports.getUserById = (req, res) => { /* ... */ }
exports.updateUserById = (req, res) => { /* ... */ }
exports.deleteUserById = (req, res) => { /* ... */ }