const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();

//import controllers

const {updateUser, renderUsers, deleteUser,addUser ,renderUpdate}= require("../controllers/controller")


//handle the routes

//-----------------------------------
// a GET request to the "/" home route
router.get('/',renderUsers)

router.delete('/delete/:id',deleteUser)
//------------------------------------
//render the add.ejs page
router.get("/add",(req,res)=>{
 res.render("add")
})
//A POST request from the "/add" route
router.post("/add",addUser)


//------------------------------------
//render the update.ejs page
router.get("/update/:id",renderUpdate)

//A PUT request from "/update route"
router.post("/update/:id",updateUser)

//All the routes in the boillerplate are : 
// "/" home route -> Displays all the users
// "/add" route -> Displays a form to add new users
// "/update" route -> Displays a form to update a route
//** The delete option is provided in the "/" route

module.exports = router;
