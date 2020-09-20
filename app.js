const express = require("express");
const app = express();

app.use(express.static(__dirname + '/public/'));
app.get("/", function(req, res){
  res.sendFile(__dirname+"/index.html");
});

app.get("/art", function(req, res){
  res.sendFile(__dirname+"/art.html");
});

app.get("/contact", function(req, res) {
  res.sendFile(__dirname+"/contact.html")
});

app.listen(process.env.PORT || 4000, function() {
  console.log("Server started on port 4000");
});
