const express = require('express');
class AdminController {
  static blog(req, res) {
    res.render('blog'); // Render the admin login view
  }
  static dashboard(req, res) {
    res.render('admin/dashboard'); // Render the admin dashboard view
  }
}
module.exports = AdminController;