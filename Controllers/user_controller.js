const express = require('express');
class UserController {
  static login(req, res) {
    res.render('login'); // Render the login view
  }
}

module.exports = UserController;
