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
    // POST route to create new user
    app.post("/api/createUser", function(req, res) {
        db.Users.create({
            username: req.body.usernameInput,
            password: req.body.passwordInput
        }).then(function(newUser) {
            res.json(newUser);
        }).catch(function(err) {
            // res.json("Unable to create new account due to:" + err)
            res.json(err)
        });
    });

    // POST route to log user in
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

    // GET route to retrieve all the events for user logged in
    app.get("/api/calendar/:id", function(req, res) {
        db.Events.findAll({
            where: {
                UserId: req.params.id
            }
        }).then(function(allEvents) {
            res.json(allEvents);
        });
    });

    // POST route for creating new event
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

    // PUT route for updating specificed event
    app.put("/api/modifyEvent/:id", function(req, res) {
        db.Events.update({
          title: req.body.eventTitle,
          startDate: req.body.eventStartDate,
          startTime: req.body.eventStartTime,
          endTime: req.body.eventEndTime,
          description: req.body.eventDescription
        }, {
            where: {
                id: req.params.id
            }
        }).then(function(modifiedEvent) {
            res.json(modifiedEvent);
        });
    });

  // GET route to retrieve all the events for user logged in
  app.get("/api/calendar/:id", function(req, res) {
    db.Events.findAll({
      where: {
        UserId: req.params.id
      }
    }).then(function(allEvents) {
      res.json(allEvents);
    })
  })

    // DELETE route for deleting specificed event
    app.delete("/api/deleteEvent/:id", function(req, res) {
        db.Events.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(DBresults) {
            res.json(DBresults);
        })
    });
}
