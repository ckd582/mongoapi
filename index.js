var express = require("express");
var mongoose = require("mongoose");
var app = express();

app.use(express.urlencoded({ extended: false }));

mongoose.connect(
  "mongodb+srv://root:1234@cluster0.pm5fk.mongodb.net/mydb?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.get("/", function (request, response) {
  console.log(request);
  response.send("Hello World!!!!!!!!!!!!!!");
});

var port = 8080;
app.listen(port, function () {
  console.log(`Server is Starting at http://localhost:${port}`);
});
