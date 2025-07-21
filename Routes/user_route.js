const express= require('express');
const user_router = express();
const UserController = require('../Controllers/user_controller'); // Import the UserController
// Set view engine
user_router.use(express.json());
user_router.use(express.urlencoded({ extended: true }));    

user_router.set('view engine', 'ejs');  
user_router.set('views', "./View");


user_router.get('/login', UserController.login); // Define the route for user login

module.exports = user_router;
