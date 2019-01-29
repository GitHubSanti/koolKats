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
  // Creates new user
  app.post("/api/createUser", function(req,res) {
    db.Users.create({
      username: req.body.usernameInput,
      password: req.body.passwordInput
    }).then(function(newUser){
        res.json(newUser);
    }).catch(function(err) {
        // res.json("Unable to create new account due to:" + err)
        res.json(err)
    });
  });

  // Logs in user
  app.post("/api/login", function(req, res) {
    db.Users.findAll({
      where: {
        username: req.body.usernameInput,
        password: req.body.passwordInput
      }
    }).then(function(data) {
      res.json(data);
    });
  });

  // Creates new Event
  app.post("/api/addEvent/:id", function(req, res) {
      db.Events.create({
        title: req.body.eventTitle,
        startDate: req.body.eventStartDate,
        startTime: req.body.eventStartTime,
        endTime: req.body.eventEndTime,
        description: req.body.eventDescription,
        UserId: req.params.id
      }).then(function(createdEvent) {
        res.json(createdEvent);
      });
  });

  // Deletes Event
app.delete("/api/deleteEvent/:id", function(req,res) {
  db.Events.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(DBresults) {
    res.json(DBresults);
  })
});

  // GET route to retrieve all the events and the users associated
  app.get("/api/calendar/:id", function(req, res) {
    db.Events.findAll({
      where: {
        UserId: req.params.id
      }
    }).then(function(allEvents) {
      res.json(allEvents);
    });
  });
};
