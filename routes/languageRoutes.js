const express = require("express");
const languageController = require("../controllers/languageController"); 
const languageRouter = express.Router();

languageRouter
    .route("/")
    .post(languageController.createlanguage)     
    .get(languageController.getAlllanguages);    


languageRouter
    .route("/:id")
    .get(languageController.getlanguageById)      
    .put(languageController.updatelanguageById)   
    .delete(languageController.deletelanguageById); 

module.exports = languageRouter;