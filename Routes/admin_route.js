const express = require('express');
const admin_router = express();
const path = require('path');
const AdminController = require('../Controllers/admin_controller');
admin_router.use(express.json());

//admin_router.use(express.urlencoded({ extended: true }));

//set view engine
admin_router.set('view engine', 'ejs');
admin_router.set('views', "./View");

admin_router.get('/', AdminController.blog);
admin_router.get('/dashboard', AdminController.dashboard); // Define the route for admin dashboard
module.exports = admin_router;