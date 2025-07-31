const express = require("express");
const userValidator = require("../validations/userValidation")
const userController = require("../controllers/userController"); 
const userRouter = express.Router();

userRouter
    .route("/")
    .post(userValidator ,userController.createUser)     
    .get(userController.getAllUsers);    


userRouter
    .route("/:id")
    .get(userController.getUserById)      
    .put(userController.updateUserById)   
    .delete(userController.deleteUserById); 

module.exports = userRouter;
 
