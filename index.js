var express = require("express");

var app = express();

app.get("/", function (request, response) {
  console.log(request);
  response.send("Hello World");
});

var port = 8080;
app.listen(port, function () {
  console.log(`Server is Starting at http://localhost:${port}`);
});
