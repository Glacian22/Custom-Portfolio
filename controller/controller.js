//Here there be ROUTES

var express = require("express");

var router = express.Router();

// root route
router.get("/", function (req, res) {
  console.log("get root route")

  res.render("index");
});


// Export routes for server.js to use.
module.exports = router;