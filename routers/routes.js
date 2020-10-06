var express = require("express");
var router = express.Router();
var User = require("../models/contactModel");
var List = require("../models/listModel");

router.get("/", function (req, res) {
  // res.send("Hello SeoCho!");
  res.render("index", { name: "윤창진" });
});

router.post("/signup", function (req, res, next) {
  // console.log(req.body);

  User.findOne({ email: req.body.email }, function (err, user) {
    if (err) {
      return next(err);
    } else if (user) {
      return res.send("이미 사용된 이메일 입니다.");
    } else {
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
            data: contact,
          });
        }
      });
    }
  });
});

router.post("/login", function (req, res, next) {
  var id = req.body.id;
  var password = req.body.password;

  User.findOne({ email: id }, function (err, user) {
    if (err) return next(err);
    else if (!user) return res.send("User not founded");
    else {
      if (user.password != password) {
        res.send("Password is Invalid");
      } else {
        res.send(`Welcome to My world ${user.name}!!!!!`);
      }
      // console.log(user);
      // return res.send("user");
    }
  });
});

router.get("/list", (req, res, next) => {
  res.render("inputList");
});

router.post("/list", function (req, res, next) {
  var listContents = new List();

  listContents.title = req.body.title;
  listContents.contents = req.body.contents;
  listContents.author = req.body.author;

  listContents.save(function (err) {
    if (err) {
      return next(err);
    } else {
      return res.json(listContents);
    }
  });
});

router.get("/contents", (req, res, next) => {
  List.find((err, data) => {
    if (err) return next(err);
    else return res.json(data);
  });
});

module.exports = router;
