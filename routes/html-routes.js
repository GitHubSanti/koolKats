// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/createUser", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/createLogin.html"));
  });

  app.get("/calendar", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/calendar.html"));
  });

  app.get("/addEvent", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/addEvent.html"));
  });

  app.get("/modifyEvent", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/modifyEvent.html"));
  });

  app.get("/about", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/about.html"));
  })
};
