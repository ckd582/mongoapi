var express = require("express");
var router = express.Router();
var User = require("../models/contactModel");

router.get("/", function (req, res) {
  // res.send("Hello SeoCho!");
  res.render("index", { name: "윤창진" });
});

router.post("/signup", function (req, res) {
  // console.log(req.body);

  var contact = new User();

  contact.name = req.body.name;
  contact.password = req.body.password;
  contact.email = req.body.email;
  contact.gender = req.body.gender;
  contact.phone = req.body.phone;

  contact.save(function (err) {
    if (err) {
      res.json(err);
    } else {
      res.json({
        message: "New Contact created",
        data: cantact,
      });
    }
  });

  res.json(req.body);
});

module.exports = router;
