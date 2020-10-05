var express = require("express");
var mongoose = require("mongoose");
require("dotenv").config();
var apiRouter = require("./routers/routes");
var path = require("path");
var app = express();
var bodyParser = require("body-parser");

app.set("views", path.resolve(__dirname + "/views"));
console.log(__dirname + "/views");
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api", apiRouter);

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
