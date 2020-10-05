var express = require("express");
var mongoose = require("mongoose");
require("dotenv").config();
var app = express();

app.use(express.urlencoded({ extended: false }));

var mongo_url = process.env.MONGO_URL;
mongoose.connect(mongo_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/", function (request, response) {
  console.log(request);
  response.send("Hello World!!!!!!&&&&!???!");
});

var port = process.env.PORT || 8080;
app.listen(port, function () {
  console.log(`Server is Starting at http://localhost:${port}`);
});
