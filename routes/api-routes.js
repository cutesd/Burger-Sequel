// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

    // GET route for getting all of the posts
    app.get("/", function (req, res) {
        // Add sequelize code to find all posts, and return them to the user with res.json
        db.Burger.findAll()
            .then(data => {
                // return the result
                //  res.json(data);
                // console.log(data[0]);
                 res.render("index", { burgers: data });
            })
            .catch(err => {
                res.json(err);
            });
    });

    /* 
    // SHOW
  router.get("/", function (req, res) {
      burger.selectAll((data) => {
          res.render("index", { burgers: data });
      });
  });
  
  
    */

    // POST route for saving a new post
    app.post("/api/burgers", function (req, res) {
        // Add sequelize code for creating a post using req.body,
        db.Burger.create({
            burger_name: req.body.burger_name
        })
            .then(result => {
                // then return the result using res.json
                res.json(result);
            })
            .catch(err => {
                res.json(err);
            });
    });

    /* // CREATE
    router.post("/api/burgers", (req, res) => {
        burger.insertOne(["burger_name"], [req.body.burger_name], (result) => {
            res.json({ id: result.insertId });
        })
    })
    */

    // DELETE route for deleting posts
    app.delete("/api/burgers/:id", function (req, res) {
        // Add sequelize code to delete a post where the id is equal to req.params.id, 
        db.Burger.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(result => {
                // then return the result to the user using res.json
                res.json(result);
            })
            .catch(err => {
                res.json(err);
            })
    });

    /* */

    // PUT route for updating posts
    app.put("/api/burgers/:id", function (req, res) {
        // Add code here to update a post using the values in req.body, where the id is equal to req.body.id
        db.Burger.update(req.body, {
            where: {
                id: req.params.id
            }
        })
            .then(result => {
                //  and return the result to the user using res.json
                res.json(result);
            })
            .catch(err => {
                res.json(err);
            })

    });
    /*
    / UPDATE
  router.put("/api/burgers/:id", (req, res) => {
      var cond = "id = " + req.params.id;
  
      burger.updateOne({ devoured: req.body.devoured }, cond, (result) => {
          if (result.changedRows == 0) return res.status(404).end();
          else res.status(200).end();
      });
  });
    */

    //
    //
    //
};
