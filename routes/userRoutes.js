const express = require("express");
const userController = require("../controllers/userController"); 
const userRouter = express.Router();

userRouter
    .route("/")
    .post(userController.createUser)     
    .get(userController.getAllUsers);    


userRouter
    .route("/:id")
    .get(userController.getUserById)      
    .put(userController.updateUserById)   
    .delete(userController.deleteUserById); 

module.exports = userRouter;
 
