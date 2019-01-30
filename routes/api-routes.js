// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Grabbing our models

var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // POST route for saving a new todo. You can create a todo using the data on req.body
  app.post("/api/addEvent", function(req, res) {

  });

  app.post("/api/createLogin", function(req, res) {

  });

  app.post("/api/login", function(req, res) {

  });
};
