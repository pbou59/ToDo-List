
const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");


const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const items = [];

app.get("/", function(req, res){

  res.render("list", {dayName: date.getDate(), newListItems: items});
});

app.post("/", function(req, res){
  item = req.body.newItem;
  items.push(item);
  res.redirect("/");
});

app.get("/about", function(req, res){
  res.render("about");
});



app.listen(3000, function (){
  console.log("Server started on port 3000");
});
